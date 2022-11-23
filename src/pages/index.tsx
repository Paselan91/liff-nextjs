import { Box, Button, Container, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Box mt={5} ml={5}>
      <Button as={'a'} fontSize={'xl'} fontWeight={400} variant={'link'} href={'/posts'}>
        Posts List
      </Button>
    </Box>
  )
}

export default Home
