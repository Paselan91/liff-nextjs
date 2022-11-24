import { ApolloClient, InMemoryCache } from '@apollo/client'

// TODO: 要調査 Localでdocker-composeを使用している理由から、SSGとCSRでエンドポイントを分ける必要がありそう
// docker-composeの設定を変えれば不要？ backendを host networkにする?
let beUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_SSR}`
if (typeof window !== 'undefined') {
  beUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL_FOR_CSR}`
}

const apolloClient = new ApolloClient({
  uri: beUrl,
  cache: new InMemoryCache(),
})

export default apolloClient
