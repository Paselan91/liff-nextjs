import { gql } from '@apollo/client'

export const FETCH_ALL_USERS = gql`
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

export const FETCH_USER_BY_ID = gql`
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

export const FETCH_USER_BY_ID_FOR_HEALTHCHECK = gql`
  query fetchUserById($id: ID!) {
    fetchUserById(id: $id) {
      id
      user_sub_id
    }
  }
`
