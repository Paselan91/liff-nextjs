import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FC, memo } from 'react'

const Login: FC = () => {
  const signUpUrl = '/signup'

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email or AccountID</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Dont have an account ?{' '}
                <Link href={signUpUrl} color={'blue.400'}>
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default memo(Login)
