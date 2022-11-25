import { useMutation } from '@apollo/client'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react'
import { FC, memo } from 'react'
import { DELETE_POST } from '../../graphql/queries/post/mutation'
// import { useRouter } from 'next/router';

interface Props {
  postId: string
  title: string
  description: string
  imageUrl: string
  showBtns: boolean
}

const PostCard: FC<Props> = ({ postId, title, description, imageUrl, showBtns }) => {
  const [deletePost, { data }] = useMutation(DELETE_POST)
  const router = useRouter()

  const onClickDeletePost = (postId: string) => {
    deletePost({ variables: { post_id: postId } })
    // TODO: deletePostの返り値がtrueの場合のみ遷移させる
    router.push('/posts')
  }

  return (
    <Center py={6}>
      <Box
        maxW='445px'
        w='full'
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow='2xl'
        rounded='md'
        p={6}
        overflow='hidden'
      >
        <Center>
          <Image
            src={imageUrl}
            fallbackSrc='https://via.placeholder.com/150'
            alt='paper image'
            objectFit='cover'
            boxSize='200px'
          />
        </Center>
        <Stack>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize='2xl' fontFamily='body'>
            {title}
          </Heading>
          <Text color='gray.500'>{description}</Text>
        </Stack>

        {showBtns && (
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              onClick={() => onClickDeletePost(postId)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'red.300'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}
            >
              Delete
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'green.300'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Edit
            </Button>
          </Stack>
        )}
      </Box>
    </Center>
  )
}

export default memo(PostCard)
