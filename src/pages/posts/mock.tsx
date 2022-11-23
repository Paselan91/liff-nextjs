import { useQuery } from '@apollo/client'
import {
  SimpleGrid,
  Container,
  Button,
  Link,
  Box,
  Center,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import NextLink from 'next/link'
import { memo, useEffect, useState } from 'react'
import { PostConnection, PaginationInput, PostEdge } from '../../types/generated/graphql'
import PaperCard from '@/components/organisms/PaperCard'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_ALL_POSTS } from '@/graphql/queries/post/query'

const mockPosts = [
  {
    cursor: 1,
    node: {
      id: '1',
      title: 'title1',
      body: 'body1',
      image_url: 'imageurl1',
      is_public: false,
    },
  },
  {
    cursor: 2,
    node: {
      id: '2',
      title: 'title2',
      body: 'body2',
      image_url: 'imageurl2',
      is_public: false,
    },
  },
  {
    cursor: 3,
    node: {
      id: '3',
      title: 'title3',
      body: 'body3',
      image_url: 'imageurl3',
      is_public: false,
    },
  },
  {
    cursor: 4,
    node: {
      id: '4',
      title: 'title4',
      body: 'body4',
      image_url: 'imageurl4',
      is_public: false,
    },
  },
  {
    cursor: 5,
    node: {
      id: '5',
      title: 'title5',
      body: 'body5',
      image_url: 'imageurl5',
      is_public: false,
    },
  },
  {
    cursor: 6,
    node: {
      id: '6',
      title: 'title6',
      body: 'body6',
      image_url: 'imageurl6',
      is_public: false,
    },
  },
  {
    cursor: 7,
    node: {
      id: '7',
      title: 'title7',
      body: 'body7',
      image_url: 'imageurl7',
      is_public: false,
    },
  },
  {
    cursor: 8,
    node: {
      id: '8',
      title: 'title8',
      body: 'body8',
      image_url: 'imageurl8',
      is_public: false,
    },
  },
  {
    cursor: 9,
    node: {
      id: '9',
      title: 'title9',
      body: 'body9',
      image_url: 'imageurl9',
      is_public: false,
    },
  },
]

// interface Props {
//   propsPosts: any
// }

// const PostList: NextPage<Props> = ({ propsPosts }) => {
const PostList: NextPage = () => {
  // const { loading, error, data } = useQuery(FETCH_ALL_POSTS)
  // const [posts, setPosts] = useState<any>(propsPosts)

  // useEffect(() => {
  //   setPosts(data?.pokemons)
  // }, [data])

  // if (error) console.error("err reason",error)

  if (!mockPosts) {
    return (
      <Container maxW='6xl' color='white'>
        <div>This is Error Page</div>
      </Container>
    )
  }

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
          {mockPosts.map((post: any, index: number) => (
            <div key={index}>
              <NextLink href={'/papers/1'}>
                <div style={{ cursor: 'pointer' }}>
                  <PaperCard
                    title={post.node.title}
                    description={post.node.body}
                    imageUrl={post.node.image_url}
                  />
                </div>
              </NextLink>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default memo(PostList)

// export const getServerSideProps: GetServerSideProps = async () => {
//   const input: PaginationInput = {
//     first: 20,
//     after: "0",
//   }

//   const { data } = await apolloClient.query({
//     query: FETCH_ALL_POSTS,
//     variables: {
//       input: input
//     },
//   })

//   const posts: any = data?.fetchAllPosts?.edges
//   return { props: { posts } }
// }
