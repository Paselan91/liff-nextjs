import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Container,
} from '@chakra-ui/react'
import type { NextPage } from 'next'

import Image from 'next/image'
import { memo } from 'react'
import PaperCard from '../../components/organisms/PaperCard'

const paper = {
  id: 1,
  title: 'paper 1',
  description:
    'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
}

const Paper: NextPage = () => {
  return (
    <>
      <Container maxW='6xl' color='white'>
        <PaperCard title={paper.title} description={paper.description} />
      </Container>
    </>
  )
}

export default memo(Paper)
