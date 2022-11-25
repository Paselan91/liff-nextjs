import { useQuery } from '@apollo/client'
import { SimpleGrid, Container, Button, Stack } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import NextLink from 'next/link'
import { memo, useCallback, useState } from 'react'
import PostCard from '@/components/organisms/PostCard'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_ALL_POSTS } from '@/graphql/queries/post/query'
import { PostEdge } from '@/types/generated/graphql'

interface Props {
  propsPosts: PostEdge[]
}

const PostList: NextPage<Props> = ({ propsPosts }) => {
  const [posts, setPosts] = useState<PostEdge[]>(propsPosts)

  const { fetchMore, data, loading, error } = useQuery(FETCH_ALL_POSTS, {
    variables: {
      input: {
        first: 20,
        after: '0',
      },
    },
    onCompleted: ({ fetchAllPosts }) => {
      setPosts(fetchAllPosts?.edges)
    },
  })

  return (
    <>
      <Container maxW='6xl'>
        <Stack spacing={4} direction='row' align='center'>
          <Button
            as='a'
            href={'/posts/create'}
            my='5'
            mx='auto'
            size='lg'
            fontSize={'sm'}
            rounded={'full'}
            color={'white'}
            bg={'blue.300'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            Create
          </Button>
        </Stack>
        <SimpleGrid columns={3} spacing={10}>
          {posts.map((post: PostEdge, index: number) => (
            <div key={index}>
              <NextLink href={`posts/${post.node.id}`}>
                <div style={{ cursor: 'pointer' }}>
                  <PostCard
                    postId={post.node.id}
                    title={post.node.title}
                    description={post.node.body}
                    imageUrl={post.node.image_url}
                    showBtns={false}
                  />
                </div>
              </NextLink>
            </div>
          ))}
        </SimpleGrid>
        <Button
          // onClick={() => fetchMorePosts()}
          as='a'
          my='5'
          mx='auto'
          size='lg'
          fontSize={'sm'}
          rounded={'full'}
          color={'white'}
          bg={'blue.300'}
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}
        >
          Fetch more
        </Button>
      </Container>
    </>
  )
}

export default memo(PostList)

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: FETCH_ALL_POSTS,
    variables: {
      input: {
        first: 20,
        after: '0',
      },
    },
  })

  const posts: PostEdge[] = data?.fetchAllPosts?.edges
  return {
    props: {
      // TODO: propsPosts 名前変える
      propsPosts: posts,
    },
  }
}
