import { Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { memo } from 'react'
import PostCard from '@/components/organisms/PostCard'
import apolloClient from '@/graphql/apllo-client'
import { FETCH_USER_BY_ID_FOR_HEALTHCHECK } from '@/graphql/queries/user/query'
import { User } from '@/types/generated/graphql'

interface Props {
  user: User
}

const HCDetail: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Container maxW='6xl' color='white'>
        <PostCard
          postId={user.id}
          title={user.user_sub_id}
          description={'dummy text'}
          imageUrl={'dummy text'}
          showBtns={false}
        />
      </Container>
    </>
  )
}

export default memo(HCDetail)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const { data } = await apolloClient.query({
    query: FETCH_USER_BY_ID_FOR_HEALTHCHECK,
    variables: {
      id: id,
    },
  })

  const user: User = data?.fetchUserById
  return {
    props: {
      user: user,
    },
  }
}
