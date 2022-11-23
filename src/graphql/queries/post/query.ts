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
