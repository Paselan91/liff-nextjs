import { useQuery } from '@apollo/client'
import { SimpleGrid, Container, Button, Link } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import NextLink from 'next/link'
import { memo, useEffect, useState } from 'react'
import PaperCard from '@/components/organisms/PaperCard'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_ALL_POKEMONS } from '@/graphql/test/pokemons.query'
import { Pokemon } from '@/graphql/test/type'

const description =
  'This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.This is sample text.'

interface Props {
  pokemons: Pokemon[]
}

// const Papers: NextPage<Props> = ({ pokemons }) => {
const Papers: NextPage<Props> = () => {
  // const { loading, error, data } = useQuery(FETCH_ALL_POKEMONS)
  const pokemons: any = [
    {
      id: '1',
      name: 'test1',
      image: '',
    },
    {
      id: '2',
      name: 'test2',
      image: '',
    },
  ]
  const [clientPokemons, setClientPokemons] = useState<Pokemon[]>(pokemons)

  // useEffect(() => {
  //   setClientPokemons(data?.pokemons)
  // }, [data])

  // if (error) console.error("err reason",error)

  if (!clientPokemons) {
    return (
      <Container maxW='6xl' color='white'>
        <div>This is Error Page</div>
      </Container>
    )
  }

  return (
    <>
      <Container maxW='6xl' color='white'>
        <div>This is Top Page</div>
        <SimpleGrid columns={3} spacing={10}>
          {clientPokemons.map((pokemon: any, index: number) => (
            <div key={index}>
              <NextLink href={'/papers/1'}>
                <div style={{ cursor: 'pointer' }}>
                  <PaperCard
                    title={pokemon.name}
                    description={description}
                    imageUrl={pokemon.image}
                  />
                </div>
              </NextLink>
            </div>
          ))}
        </SimpleGrid>
        <NextLink href='/papers/user' passHref>
          <Link color={'black'}>User Test Page</Link>
        </NextLink>
      </Container>
    </>
  )
}

export default memo(Papers)

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await apolloClient.query({
//     query: FETCH_ALL_POKEMONS,
//     variables: {},
//   })
//   const pokemons: Pokemon[] = data?.pokemons
//   return { props: { pokemons } }
// }
