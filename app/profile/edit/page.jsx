'use client';

import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	Avatar,
	Center,
	InputGroup,
	Text,
	Box
} from '@chakra-ui/react';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function EditProfile() {
	const { data: session } = useSession();
	const router = useRouter();

	const [serviceProvider, setServiceProvider] = useState(
		session?.user.serviceProvider
	);
	const [policyNumber, setPolicyNumber] = useState(
		session?.user.policyNumber
	);

	const handleSubmit = async () => {
		console.log(
			'Saving Service Provider and Policy Number to database....'
		);
		const response = await fetch(`/api/auth/edit/${session?.user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				_id: session?.user.id,
				email: session?.user.email,
				username: session?.user.name,
				image: session?.user.image,
				serviceProvider: serviceProvider,
				policyNumber: policyNumber
			})
		});
		console.log('Getting response: ' + response.json());
		if (response.ok) {
			router.push('/profile');
		}
	};

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack
				spacing={4}
				w={'full'}
				maxW={'md'}
				bg={useColorModeValue('white', 'gray.700')}
				rounded={'xl'}
				boxShadow={'lg'}
				p={6}
				my={12}
			>
				<Heading
					lineHeight={1.1}
					fontSize={{ base: '2xl', sm: '3xl' }}
					textAlign={'center'}
				>
					{session?.user.name}'s Profile
				</Heading>

				<FormControl id='name' py={'5'}>
					<Stack direction={'column'} spacing={6}>
						<Center>
							<Avatar size='xl' src={session?.user.image} />
						</Center>
						<Box
							w='full'
							display={'flex'}
							flexDir={'column'}
							alignItems={'center'}
						>
							<Text>{session?.user.name}</Text>
							<Text>{session?.user.email}</Text>
						</Box>
					</Stack>
				</FormControl>

				<FormControl
					id='provider'
					isDisabled={session?.user.serviceProvider}
				>
					<FormLabel>Insurance Provider</FormLabel>
					<InputGroup>
						<Input
							placeholder={session?.user.serviceProvider}
							_placeholder={{ color: 'gray.500' }}
							type='text'
							onChange={e => {
								setServiceProvider(e.target.value);
							}}
						/>
						{/* <InputRightElement>
							<Button variant={'ghost'} size={'sm'} mr={'1'}>
								<AiFillEdit />
							</Button>
						</InputRightElement> */}
					</InputGroup>
				</FormControl>

				<FormControl
					id='policyNumber'
					isDisabled={session?.user.policyNumber}
				>
					<FormLabel>Policy Number</FormLabel>
					<InputGroup>
						<Input
							placeholder={session?.user.policyNumber}
							_placeholder={{ color: 'gray.500' }}
							type='number'
							onChange={e => {
								setPolicyNumber(e.target.value);
							}}
						/>
						{/* <InputRightElement>
							<Button variant={'ghost'} size={'sm'} mr={'1'}>
								<AiFillEdit />
							</Button>
						</InputRightElement> */}
					</InputGroup>
				</FormControl>

				<Stack spacing={6} direction={['column', 'row']}>
					<Button
						as={'a'}
						href='/profile'
						bg={'red.400'}
						color={'white'}
						w='full'
						_hover={{
							bg: 'red.500'
						}}
					>
						Cancel
					</Button>
					<Button
						bg={'green.400'}
						color={'white'}
						w='full'
						_hover={{
							bg: 'green.500'
						}}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Stack>
			</Stack>
		</Flex>
	);
}
