'use client';

import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	VStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import {
	AiOutlineDollar,
	AiOutlineMedicineBox,
	AiOutlineSafety
} from 'react-icons/ai';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Add() {
	const { data: session } = useSession();
	const router = useRouter();

	const [serviceProvider, setServiceProvider] = useState();
	const [procedure, setProcedure] = useState();
	const [cost, setCost] = useState();

	useEffect(() => {
		const getServiceProvider = async () => {
			if (await session?.user) {
				const response = await fetch(
					`/api/serviceProvider/${session?.user.id}`
				);

				const responseData = await response.json();

				await setServiceProvider(responseData.serviceProvider);
			}
		};

		getServiceProvider();
	}, [session]);

	const handleSubmit = async e => {
		e.preventDefault();

		console.log('UserID', session?.user.id);
		console.log('Service Provider', serviceProvider);
		console.log('Procedure', procedure);
		console.log('Cost', cost);

		const response = await fetch(`/api/procedureCost`, {
			method: 'POST',
			body: JSON.stringify({
				userId: session?.user.id,
				serviceProvider: serviceProvider,
				procedure: procedure,
				cost: cost
			})
		});

		if (response.ok) {
			console.log('Successful add');
			router.push('/');
		} else {
			console.log('Unsuccessful');
		}
	};

	return (
		<Container maxW='full' mt={20} centerContent overflow='hidden'>
			<Flex>
				<Box
					bg={'#9DC4FB'}
					color='white'
					borderRadius='lg'
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}
				>
					<Box p={1}>
						<Wrap
							spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
							direction={'column'}
						>
							<WrapItem>
								<Box textAlign={'center'}>
									<Heading>Add Your Procedure Costs</Heading>
									<Text
										mt={{ sm: 3, md: 3, lg: 5 }}
										color='gray.500'
									>
										Complete the form below
									</Text>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg='white' borderRadius='lg' w={'full'}>
									<Box m={8} color='#0B0E3F'>
										<VStack spacing={5}>
											<FormControl
												id='name'
												isDisabled={session?.user.name}
											>
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={
															<BsPerson color='gray.800' />
														}
													/>
													<Input
														type='text'
														size='md'
														value={
															session?.user.name
														}
													/>
												</InputGroup>
											</FormControl>
											<FormControl
												id='provider'
												isDisabled={serviceProvider}
											>
												<FormLabel>Provider</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={
															<AiOutlineSafety />
														}
													/>
													<Input
														type='text'
														size='md'
														value={serviceProvider}
													/>
												</InputGroup>
											</FormControl>
											<FormControl id='name'>
												<FormLabel>
													Procedure Name
												</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={
															<AiOutlineMedicineBox />
														}
													/>
													<Input
														type='text'
														size='md'
														onChange={e =>
															setProcedure(
																e.target.value
															)
														}
													/>
												</InputGroup>
											</FormControl>
											<FormControl id='name'>
												<FormLabel>Cost</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={
															<AiOutlineDollar />
														}
													/>
													<Input
														type='text'
														size='md'
														onChange={e =>
															setCost(
																e.target.value
															)
														}
													/>
												</InputGroup>
											</FormControl>

											<FormControl
												id='name'
												float='right'
											>
												<Button
													variant='solid'
													bg='#0D74FF'
													color='white'
													onClick={handleSubmit}
												>
													Submit
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
}
