import { Button, Center, Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { memo } from 'react'
import PaperCard from '@/components/organisms/PaperCard'
import apolloClient from '@/graphql/apllo-client'
import { FETCH_POST_BY_ID } from '@/graphql/queries/post/query'
import { Post } from '@/types/generated/graphql'

interface Props {
  post: Post
}

const PostDetail: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Container maxW='6xl' color='white'>
        <PaperCard title={post.title} description={post.body} imageUrl={post.image_url} />
        <Center>
          <Button
            as='a'
            href={'/posts'}
            my='5'
            mx='auto'
            size='lg'
            fontSize={'sm'}
            rounded={'full'}
            color={'white'}
            bg={'gray.300'}
            _hover={{
              bg: 'gray.500',
            }}
            _focus={{
              bg: 'gray.500',
            }}
          >
            Back
          </Button>
        </Center>
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
      id: id,
    },
  })

  const post: Post = data?.fetchPostById
  return {
    props: {
      post: post,
    },
  }
}
