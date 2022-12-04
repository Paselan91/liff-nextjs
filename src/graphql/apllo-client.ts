import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PostConnection } from '@/types/generated/graphql'

const getBackendUrl = () => {
  if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    console.log('env prod')
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}`
  }
  console.log('env local')

  // TODO: 要調査 Localでdocker-composeを使用している理由から、SSGとCSRでエンドポイントを分ける必要がありそう
  // docker-composeの設定を変えれば不要？ backendを host networkにする?
  if (typeof window !== 'undefined') {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_CSR}`
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_SSR}`
}

const apolloClient = new ApolloClient({
  uri: getBackendUrl(),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fetchAllPosts: {
            keyArgs: ['first', 'after'],
            merge: (existing: PostConnection, incoming: PostConnection) => {
              return {
                ...(incoming ?? {}),
                edges: [...(existing?.edges ?? []), ...(incoming?.edges ?? [])],
              }
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export default apolloClient
