import { useQuery } from '@apollo/client'
import { SimpleGrid, Container, Button, Stack } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import NextLink from 'next/link'
import { memo, useState } from 'react'
import PostCard from '@/components/organisms/PostCard'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_ALL_POSTS } from '@/graphql/queries/post/query'
import {
  FetchAllPostsQuery,
  FetchAllPostsQueryVariables,
  PostEdge,
} from '@/types/generated/graphql'

interface Props {
  propsPosts: PostEdge[]
}

const PostList: NextPage<Props> = ({ propsPosts }) => {
  const [posts, setPosts] = useState<PostEdge[]>(propsPosts)
  const [endCursor, setEndCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState(false)

  const { fetchMore, data } = useQuery<FetchAllPostsQuery, FetchAllPostsQueryVariables>(
    FETCH_ALL_POSTS,
    {
      variables: {
        input: {
          first: 20,
        },
      },
      onCompleted: ({ fetchAllPosts }) => {
        setPosts(fetchAllPosts.edges as PostEdge[])
        setEndCursor(fetchAllPosts.pageInfo.endCursor as string)
        setHasNextPage(fetchAllPosts.pageInfo.hasNextPage)
        console.log('fetchALlPosts')
        console.log(fetchAllPosts.pageInfo.endCursor)
        console.log(fetchAllPosts.pageInfo.hasNextPage)
      },
    },
  )

  // TODO: 暫定実装　then以下がなくても onCompleted内で動作するはず　要調査
  const fetchMorePosts = async () => {
    await fetchMore({
      variables: {
        input: {
          after: endCursor,
        },
      },
    }).then((res) => {
      // console.log("data")
      // console.log(res.data.fetchAllPosts.edges)
      const morePosts = res.data.fetchAllPosts.edges
      setPosts((prev) => [...prev, ...morePosts])
      setEndCursor(res.data.fetchAllPosts.pageInfo.endCursor)
      setHasNextPage(res.data.fetchAllPosts.pageInfo.hasNextPage)
    })
  }

  // useEffect(() => {
  //   console.log('data fetchMorePosts')
  //   console.log(data)
  // }, [data])

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
        {hasNextPage && (
          <Stack spacing={4} direction='row' align='center'>
            <Button
              onClick={() => fetchMorePosts()}
              as='a'
              my='5'
              mx='auto'
              size='lg'
              fontSize={'sm'}
              rounded={'full'}
              color={'white'}
              bg={'red.300'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}
            >
              Fetch more
            </Button>
          </Stack>
        )}
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
      propsPosts: posts,
    },
  }
}
