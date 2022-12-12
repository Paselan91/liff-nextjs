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
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { memo, useState, useEffect, ChangeEvent } from 'react'

import { CREATE_POST } from '@/graphql/queries/post/mutation'
import {
  CreatePostInput,
  CreatePostMutation,
  CreatePostMutationVariables,
} from '@/types/generated/graphql'

const PostCreate: NextPage = () => {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isPublic, setIsPublic] = useState('1')

  const toast = useToast()

  const [createPost, { data, error }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST)

  useEffect(() => {
    if (data) {
      toast({
        title: 'Successed, create post.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      router.push('/posts')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (error) {
    console.log('error', error)
  }

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const onChangeBoby = (e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)

  const update = async () => {
    const input: CreatePostInput = {
      title: title,
      body: body,
      image_url: 'tmp_url', // TODO: 画像移動処理の実装まで仮の値
      is_public: isPublic == '1' ? true : false,
    }
    console.log(input)
    try {
      await createPost({
        variables: {
          input: input,
        },
      })
    } catch (err) {
      console.log('createPost err', err)
    }
  }

  return (
    <>
      <Container maxW='4xl'>
        <Stack spacing={3} mt='10' mx='5'>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <InputGroup>
              <Input
                type='title'
                name='title'
                value={title}
                placeholder={'Enter title'}
                onChange={onChangeTitle}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Body</FormLabel>
            <InputGroup>
              <Input
                type='body'
                name='body'
                value={body}
                placeholder={'Enter body'}
                onChange={onChangeBoby}
              />
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
          Create
        </Button>
      </Container>
    </>
  )
}

export default memo(PostCreate)
