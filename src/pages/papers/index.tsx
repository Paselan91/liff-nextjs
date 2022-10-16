import { useQuery } from '@apollo/client'
import { SimpleGrid, Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import Link from 'next/link'
import { memo } from 'react'
import PaperCard from '../../components/organisms/PaperCard'

import apolloClient from '@/graphql/apllo-client'
import { COUNTRIES_QUERY } from '@/graphql/test/country.query'
import { Country } from '@/graphql/test/type'

const papers = [
  {
    id: 1,
    title: 'paper 1',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 2,
    title: 'paper 2',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 3,
    title: 'paper 3',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 4,
    title: 'paper 4',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 5,
    title: 'paper 5',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 6,
    title: 'paper 6',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 7,
    title: 'paper 7',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 8,
    title: 'paper 8',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 9,
    title: 'paper 9',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
  {
    id: 10,
    title: 'paper 10',
    description:
      'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.',
  },
]

const Papers: NextPage = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY)

  if (data) console.log(data)
  return (
    <>
      <Container maxW='6xl' color='white'>
        <div>This is Top Page</div>
        <SimpleGrid columns={3} spacing={10}>
          {papers.map((paper: any, index: number) => (
            <div key={index}>
              <Link href={'/papers/1'}>
                <div style={{ cursor: 'pointer' }}>
                  <PaperCard title={paper.title} description={paper.description} />
                </div>
              </Link>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default memo(Papers)

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: COUNTRIES_QUERY,
    variables: {},
  })
  const countries: Country[] = data.countries
  return { props: { countries } }
}
