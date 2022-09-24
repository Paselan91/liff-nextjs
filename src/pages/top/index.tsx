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
import PaperCard from '../../components/organisms/PaperCard'

const papers = [
  {
    id: 1,
    title: 'paper 1',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 2,
    title: 'paper 2',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 3,
    title: 'paper 3',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 4,
    title: 'paper 4',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 5,
    title: 'paper 5',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 6,
    title: 'paper 6',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 7,
    title: 'paper 7',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 8,
    title: 'paper 8',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 9,
    title: 'paper 9',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 10,
    title: 'paper 10',
    description: 'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
]

const Top: NextPage = () => {
  return (
    <>
      <Container maxW='6xl' color='white'>
        <div>This is Top Page</div>
        <SimpleGrid columns={3} spacing={10}>
          {papers.map((paper: any, index: number) => (
            <PaperCard 
              key={index}
              title={paper.title}
              description={paper.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Top
