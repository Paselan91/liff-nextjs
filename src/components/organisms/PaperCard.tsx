import { Box, Center, Heading, Text, Stack, useColorModeValue, Image } from '@chakra-ui/react'
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
          <Image src={imageUrl} fallbackSrc='https://via.placeholder.com/150' alt='paper image' objectFit='cover' boxSize='200px' />
        </Center>
        <Stack>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize='2xl' fontFamily='body'>
            {title}
          </Heading>
          <Text color='gray.500'>{description}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default memo(PaperCard)
