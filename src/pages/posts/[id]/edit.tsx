import { useMutation } from '@apollo/client'
import {
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Button,
  useToast,
} from '@chakra-ui/react'
import type { NextPage, GetServerSideProps } from 'next'
import { memo, useState, useEffect, ChangeEvent } from 'react'

import apolloClient from '@/graphql/apllo-client'
import { UPDATE_POST } from '@/graphql/queries/post/mutation'
import { FETCH_POST_BY_ID } from '@/graphql/queries/post/query'
import { Post, UpdatePostInput } from '@/types/generated/graphql'

interface Props {
  post: Post
}

const PostEdit: NextPage<Props> = ({ post }) => {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [isPublic, setIsPublic] = useState(post.is_public ? '1' : '0')

  const toast = useToast()

  const [updatePost, { data }] = useMutation(UPDATE_POST)

  useEffect(() => {
    if (data) {
      toast({
        title: 'Successed, update post.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [data])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const onChangeBoby = (e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)

  const update = async () => {
    const input: UpdatePostInput = {
      post_id: Number(post.id),
      title: title,
      body: body,
      is_public: isPublic == '1' ? true : false,
    }
    try {
      await updatePost({
        variables: {
          input: input,
        },
      })
    } catch (err) {
      return
    }
  }

  return (
    <>
      <Container maxW='4xl'>
        <Stack spacing={3} mt='10' mx='5'>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <InputGroup>
              <Input type='title' name='title' value={title} onChange={onChangeTitle} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Body</FormLabel>
            <InputGroup>
              <Input type='body' name='body' value={body} onChange={onChangeBoby} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Is Public</FormLabel>
            <RadioGroup onChange={setIsPublic} value={isPublic}>
              <Stack direction='column'>
                <Radio value='1'>Public</Radio>
                <Radio value='0'>Not Public</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button
          onClick={update}
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
          Update
        </Button>
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
