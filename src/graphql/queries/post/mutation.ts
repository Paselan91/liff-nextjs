import { gql } from '@apollo/client'

export const DELETE_POST = gql`
  mutation deletePost($post_id: Int!) {
    deletePost(post_id: $post_id)
  }
`
