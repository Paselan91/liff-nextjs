import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Connection = {
  edges: Array<Edge>
  nodes: Array<Node>
  pageInfo: PageInfo
}

export type CreatePostInput = {
  body: Scalars['String']
  image_url: Scalars['String']
  is_public: Scalars['Boolean']
  title: Scalars['String']
}

export type Edge = {
  cursor: Scalars['String']
  node: Node
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  deletePost: Scalars['Boolean']
  node: Scalars['Boolean']
  updatePost: Post
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type MutationDeletePostArgs = {
  post_id: Scalars['Int']
}

export type MutationNodeArgs = {
  id: Scalars['ID']
}

export type MutationUpdatePostArgs = {
  input: UpdatePostInput
}

export type Node = {
  id: Scalars['ID']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
}

export type Post = Node & {
  __typename?: 'Post'
  body: Scalars['String']
  created_at: Scalars['String']
  id: Scalars['ID']
  image_url: Scalars['String']
  is_public: Scalars['Boolean']
  title: Scalars['String']
  updated_at: Scalars['String']
  user: User
  user_id: Scalars['ID']
}

export type PostConnection = Connection & {
  __typename?: 'PostConnection'
  edges: Array<PostEdge>
  nodes: Array<Post>
  pageInfo: PageInfo
}

export type PostEdge = Edge & {
  __typename?: 'PostEdge'
  cursor: Scalars['String']
  node: Post
}

export type Query = {
  __typename?: 'Query'
  fetchAllPosts: PostConnection
  fetchAllUsers?: Maybe<Array<User>>
  fetchPostById: Post
  fetchUserById: User
  node: Scalars['Boolean']
}

export type QueryFetchAllPostsArgs = {
  input: PaginationInput
}

export type QueryFetchPostByIdArgs = {
  post_id: Scalars['Int']
}

export type QueryFetchUserByIdArgs = {
  id: Scalars['ID']
}

export type QueryNodeArgs = {
  id: Scalars['ID']
}

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>
  image_url?: InputMaybe<Scalars['String']>
  is_public?: InputMaybe<Scalars['Boolean']>
  post_id: Scalars['Int']
  title?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  created_at: Scalars['String']
  id: Scalars['ID']
  mail_address: Scalars['String']
  posts?: Maybe<Array<Post>>
  updated_at: Scalars['String']
  user_sub_id: Scalars['String']
}

export type FetchAllPostsQueryVariables = Exact<{
  input: PaginationInput
}>

export type FetchAllPostsQuery = {
  __typename?: 'Query'
  fetchAllPosts: {
    __typename?: 'PostConnection'
    edges: Array<{
      __typename?: 'PostEdge'
      cursor: string
      node: {
        __typename?: 'Post'
        id: string
        title: string
        body: string
        image_url: string
        is_public: boolean
        user: { __typename?: 'User'; id: string; user_sub_id: string }
      }
    }>
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
      endCursor?: string | null
    }
  }
}

export type FetchPostByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type FetchPostByIdQuery = {
  __typename?: 'Query'
  fetchPostById: {
    __typename?: 'Post'
    id: string
    title: string
    body: string
    image_url: string
    is_public: boolean
    user: { __typename?: 'User'; id: string; user_sub_id: string }
  }
}

export type FetchAllUsersQueryVariables = Exact<{ [key: string]: never }>

export type FetchAllUsersQuery = {
  __typename?: 'Query'
  fetchAllUsers?: Array<{
    __typename?: 'User'
    id: string
    mail_address: string
    created_at: string
    posts?: Array<{ __typename?: 'Post'; id: string }> | null
  }> | null
}

export type FetchUserByIdQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FetchUserByIdQuery = {
  __typename?: 'Query'
  fetchUserById: {
    __typename?: 'User'
    id: string
    mail_address: string
    created_at: string
    posts?: Array<{ __typename?: 'Post'; id: string }> | null
  }
}

export const FetchAllPostsDocument = gql`
  query fetchAllPosts($input: PaginationInput!) {
    fetchAllPosts(input: $input) {
      edges {
        cursor
        node {
          id
          title
          body
          image_url
          is_public
          user {
            id
            user_sub_id
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`
export const FetchPostByIdDocument = gql`
  query fetchPostById($id: Int!) {
    fetchPostById(post_id: $id) {
      id
      title
      body
      image_url
      is_public
      user {
        id
        user_sub_id
      }
    }
  }
`
export const FetchAllUsersDocument = gql`
  query fetchAllUsers {
    fetchAllUsers {
      id
      mail_address
      posts {
        id
      }
      created_at
    }
  }
`
export const FetchUserByIdDocument = gql`
  query fetchUserById($id: ID!) {
    fetchUserById(id: $id) {
      id
      mail_address
      posts {
        id
      }
      created_at
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    fetchAllPosts(
      variables: FetchAllPostsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FetchAllPostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FetchAllPostsQuery>(FetchAllPostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'fetchAllPosts',
        'query',
      )
    },
    fetchPostById(
      variables: FetchPostByIdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FetchPostByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FetchPostByIdQuery>(FetchPostByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'fetchPostById',
        'query',
      )
    },
    fetchAllUsers(
      variables?: FetchAllUsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FetchAllUsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FetchAllUsersQuery>(FetchAllUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'fetchAllUsers',
        'query',
      )
    },
    fetchUserById(
      variables: FetchUserByIdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FetchUserByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FetchUserByIdQuery>(FetchUserByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'fetchUserById',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
