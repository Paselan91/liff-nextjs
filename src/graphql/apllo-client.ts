import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_TEST_BACKEND_URL}`,
  cache: new InMemoryCache(),
})

console.log("BE URL", `${process.env.NEXT_PUBLIC_TEST_BACKEND_URL}`)

export default apolloClient
