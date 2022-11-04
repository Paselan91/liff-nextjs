import { useQuery } from '@apollo/client'
import { SimpleGrid, Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import PaperCard from '@/components/organisms/PaperCard'

import apolloClient from '@/graphql/apllo-client'
import { FETCH_ALL_USERS } from '@/graphql/queries/user/query'
interface Props {
  users: any
}

const Papers: NextPage<Props> = ({ users }) => {
  // const { loading, error, data } = useQuery(FETCH_ALL_USERS)
  const [clientUsers, setClientUsers] = useState<any>(users)
  console.log('frist clientUsers', clientUsers)

  useQuery(FETCH_ALL_USERS), {
    onCompleted: (data: any) => {
      console.log("useQuery ! data", data)
      setClientUsers(data?.fetchAllUsers)
    }
  }

  if (!clientUsers) {
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
          {clientUsers.map((user: any, index: number) => (
            <div key={index}>
              <Link href={'/papers/1'}>
                <div style={{ cursor: 'pointer' }}>
                  <PaperCard
                    title={user.user_sub_id}
                    description={user.mail_address}
                    imageUrl={""}
                  />
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
    query: FETCH_ALL_USERS,
    variables: {},
  })
  const users: any = data?.fetchAllUsers
  return { props: { users } }
}
