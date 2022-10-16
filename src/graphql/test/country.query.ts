import { gql } from '@apollo/client'

export const COUNTRIES_QUERY = gql`
  query GetLocations {
    countries {
      code
      currency
      name
    }
  }
`
