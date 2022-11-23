import { useQuery } from '@apollo/client'

import { Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { memo, useState } from 'react'
import PaperCard from '@/components/organisms/PaperCard'
import apolloClient from '@/graphql/apllo-client'
import { FETCH_POST_BY_ID } from '@/graphql/queries/post/query'
import { Post } from '@/types/generated/graphql'

interface Props {
  propsPost: Post
}

const PostDetail: NextPage<Props> = ({ propsPost }) => {
  const router = useRouter()
  const { id } = router.query

  console.log('csr id')
  console.log(id)

  const [post, setPost] = useState<Post>(propsPost)

  const { data, loading, error } = useQuery(FETCH_POST_BY_ID, {
    variables: {
      post_id: id,
    },
    onCompleted: ({ fetchPostById }) => {
      console.log('csr')
      console.log(fetchPostById)
      setPost(fetchPostById?.post)
    },
  })

  return (
    <>
      <Container maxW='6xl' color='white'>
        <PaperCard title={post.title} description={post.body} imageUrl={post.image_url} />
      </Container>
    </>
  )
}

export default memo(PostDetail)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const { data } = await apolloClient.query({
    query: FETCH_POST_BY_ID,
    variables: {
      post_id: id,
    },
  })

  console.log('id')
  console.log(id)
  console.log('ssr')
  console.log(data?.fetchPostById)

  const post: Post = data?.fetchPostById
  return {
    props: {
      // TODO: propsPosts 名前変える
      propsPost: post,
    },
  }
}
