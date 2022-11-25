import {
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
} from '@chakra-ui/react'
import type { NextPage, GetServerSideProps } from 'next'
import { memo, useState } from 'react'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_POST_BY_ID } from '@/graphql/queries/post/query'
import { Post } from '@/types/generated/graphql'

interface Props {
  post: Post
}

const PostEdit: NextPage<Props> = ({ post }) => {
  const [isPublic, setIsPublic] = useState('1')

  post.is_public ? setIsPublic('1') : setIsPublic('0')

  return (
    <>
      <Container maxW='4xl'>
        <Stack spacing={3} mt='10' mx='5'>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <InputGroup>
              <Input type='title' name='title' placeholder={post.title} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Body</FormLabel>
            <InputGroup>
              <Input type='body' name='body' placeholder={post.body} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Is Public</FormLabel>
            <RadioGroup onChange={setIsPublic} value={isPublic}>
              <Stack direction='row'>
                <Radio value='1'>Public</Radio>
                <Radio value='0'>Not Public</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
      </Container>
    </>
  )
}

export default memo(PostEdit)

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
