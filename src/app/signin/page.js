'use client';

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
	useColorModeValue
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Page() {
	return (
		<>
			<Navbar />
			<Flex align={'center'} justify={'center'} minH={'85vh'}>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={6}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'}>
							Sign in to your account
						</Heading>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						boxShadow={'lg'}
						p={8}
					>
						<Stack spacing={4}>
							<FormControl id='email'>
								<FormLabel>Email address</FormLabel>
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
									<Checkbox defaultChecked>
										Remember Me?
									</Checkbox>
									<Link color={'blue.400'}>
										Forgot password?
									</Link>
								</Stack>
								<Button
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500'
									}}
								>
									Sign in
								</Button>
								<Text align={'center'}>
									Need an account?{' '}
									<Link color={'blue.400'} href='/signup'>
										Sign Up
									</Link>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</>
	);
}
