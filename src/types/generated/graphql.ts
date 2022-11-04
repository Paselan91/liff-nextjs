import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  fetchAllPost?: Maybe<Array<Post>>;
  fetchAllUsers?: Maybe<Array<User>>;
  fetchPostById: Post;
  fetchUserById: User;
};


export type QueryFetchPostByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFetchUserByIdArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['String'];
  id: Scalars['ID'];
  mail_address: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  updated_at: Scalars['String'];
  user_sub_id: Scalars['String'];
};

export type FetchAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllUsersQuery = { __typename?: 'Query', fetchAllUsers?: Array<{ __typename?: 'User', id: string, mail_address: string, created_at: string, posts?: Array<{ __typename?: 'Post', id: string }> | null }> | null };

export type FetchUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FetchUserByIdQuery = { __typename?: 'Query', fetchUserById: { __typename?: 'User', id: string, mail_address: string, created_at: string, posts?: Array<{ __typename?: 'Post', id: string }> | null } };


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
    `;
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
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    fetchAllUsers(variables?: FetchAllUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchAllUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchAllUsersQuery>(FetchAllUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fetchAllUsers', 'query');
    },
    fetchUserById(variables: FetchUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchUserByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchUserByIdQuery>(FetchUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fetchUserById', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;