import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
      image_url
      is_public
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      id
      title
      body
      image_url
      is_public
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($post_id: Int!) {
    deletePost(post_id: $post_id)
  }
`
