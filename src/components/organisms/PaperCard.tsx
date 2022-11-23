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

interface Props {
  title: string
  description: string
  imageUrl: string
}

const PaperCard: FC<Props> = ({ title, description, imageUrl }) => {
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

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
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
      </Box>
    </Center>
  )
}

export default memo(PaperCard)
