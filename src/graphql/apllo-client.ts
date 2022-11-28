import { ApolloClient, InMemoryCache } from '@apollo/client'

// TODO: 要調査 Localでdocker-composeを使用している理由から、SSGとCSRでエンドポイントを分ける必要がありそう
// docker-composeの設定を変えれば不要？ backendを host networkにする?
let beUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_SSR}`
if (typeof window !== 'undefined') {
  beUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_CSR}`
}

const apolloClient = new ApolloClient({
  uri: beUrl,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fetchAllPosts: {
            // 対象のクエリ名
            keyArgs: ['first', 'after'], // キャッシュの区別に使用するリクエストパラメータ
            merge: (existing: any, incoming: any) => {
              // キャッシュのマージ方法を定義
              if (!existing?.edges) return incoming?.edges
              console.log('existing.edges', existing.edges)
              console.log('incoming.edges', incoming.edges)
              return {
                data: [...existing.edges, ...incoming.edges],
                pageInfo: incoming.pageInfo,
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
