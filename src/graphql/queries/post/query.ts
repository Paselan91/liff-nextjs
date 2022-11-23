import { gql } from '@apollo/client'

export const FETCH_ALL_POSTS = gql`
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

export const FETCH_POST_BY_ID = gql`
  query fetchPostById($id: ID!) {
    fetchPostById(post_id: 1) {
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
