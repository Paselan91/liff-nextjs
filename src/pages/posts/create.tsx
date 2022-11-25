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
import type { NextPage } from 'next'
import { memo, useState } from 'react'

const CreatePost: NextPage = () => {
  const [isPublic, setIsPublic] = useState('1')
  return (
    <>
      <Container maxW='4xl'>
        <Stack spacing={3} mt='10' mx='5'>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <InputGroup>
              <Input type='title' name='title' placeholder='Enter title' />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Body</FormLabel>
            <InputGroup>
              <Input type='body' name='body' placeholder='Enter body' />
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

export default memo(CreatePost)
