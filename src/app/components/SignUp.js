import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	LinkOverlay
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from './Navbar';

export default function SignUp({ supabase }) {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Navbar />

			<Flex align={'center'} justify={'center'} minH={'85vh'}>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={6}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'}>Sign Up</Heading>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						boxShadow={'lg'}
						p={8}
					>
						<Stack spacing={4} width={'380px'}>
							<FormControl id='email'>
								<FormLabel>Email address</FormLabel>
								<Input
									type='email'
									name='email'
									onChange={e =>
										setEmail(e.target.value) &&
										console.log(email)
									}
								/>
							</FormControl>
							<FormControl id='password' isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={
											showPassword ? 'text' : 'password'
										}
									/>
									<InputRightElement h={'full'}>
										<Button
											variant={'ghost'}
											onClick={() =>
												setShowPassword(
													showPassword =>
														!showPassword
												)
											}
										>
											{showPassword ? (
												<ViewIcon />
											) : (
												<ViewOffIcon />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl id='provider' isRequired>
								<FormLabel>Insurance Provider</FormLabel>

								<Input type={'text'} />
							</FormControl>
							<FormControl id='policy-number' isRequired>
								<FormLabel>Policy Number</FormLabel>

								<Input type={'number'} />
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: 'column', sm: 'row' }}
									align={'start'}
									justify={'space-between'}
								>
									<Link color={'blue.400'}>
										Forgot password?
									</Link>
								</Stack>
								<LinkOverlay href='/' width={'380px'}>
									<Button
										bg={'blue.400'}
										color={'white'}
										_hover={{
											bg: 'blue.500'
										}}
										type='submit'
									>
										Sign Up
									</Button>
								</LinkOverlay>
								<Text align={'center'}>
									Have an account?{' '}
									<Link color={'blue.400'} href='/signin'>
										Sign In
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
