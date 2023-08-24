'use client';

import Image from 'next/image';
import { Box, Button, HStack, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineGoogle, AiOutlineSearch } from 'react-icons/ai';

import { signIn, useSession, getProviders } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();

	const [providers, setProviders] = useState(null);

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const setUpProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		};

		setUpProviders();

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Box
				style={{
					background:
						'linear-gradient(175deg, #b92b27, #A600EA, #6DD5FA 70%, #FFF calc(75%))'
				}}
				height={'55vh'}
			>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					flexDir={{ base: 'column', md: 'row' }}
					mx='48'
					// pt={'10'}
					py={'64'}
					alignItems={'center'}
				>
					<Box>
						<Box opacity={'75%'} color={'black'}>
							<Heading fontSize={{ base: '30px', md: '90px' }}>
								Your Healthcare,
							</Heading>
							<Heading fontSize={'70px'}>
								<u>Simplified</u>
							</Heading>
						</Box>

						<HStack
							spacing={'5'}
							my={'10'}
							justifyContent={{ base: 'center', md: 'unset' }}
						>
							{session?.user ? (
								<Button
									as={'a'}
									leftIcon={<AiOutlineSearch />}
									variant='outline'
									size={'md'}
									href='/search'
								>
									Search
								</Button>
							) : (
								<>
									{providers &&
										Object.values(providers).map(
											provider => (
												<Button
													leftIcon={
														<AiOutlineGoogle />
													}
													key={provider.name}
													bgColor={'black'}
													colorScheme='teal'
													variant='solid'
													size={'md'}
													_hover={{
														backgrouColor: 'black'
													}}
													onClick={() => {
														signIn(provider.id);
													}}
												>
													Sign In
												</Button>
											)
										)}
								</>
							)}
						</HStack>
					</Box>
					<Image
						src='/assets/appdemo.svg'
						width={500}
						height={50}
						alt='App Demo'
					/>
				</Box>
			</Box>
		</>
	);
}
