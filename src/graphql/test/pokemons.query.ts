import { gql } from '@apollo/client'

export const FETCH_ALL_POKEMONS = gql`
  query fetchAllPokemons($first: Int = 30) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`
