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
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { memo, useEffect, useState } from 'react'

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
