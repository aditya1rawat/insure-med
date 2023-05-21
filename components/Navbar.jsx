'use client';

import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import {
	AiOutlineGoogle,
	AiOutlinePlus,
	AiOutlineSearch
} from 'react-icons/ai';

const Links = ['About', 'Contact'];

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const NavLink = ({ children }) => (
	<>
		<Button
			as={'a'}
			size={'sm'}
			variant={'ghost'}
			colorScheme='gray'
			href={children.toLowerCase()}
		>
			{children}
		</Button>
	</>
);

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

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
		<Box
			bg={scrollY > 75 ? 'white' : 'rgba(0,0,0,0)'}
			transition='background-color 0.5s ease'
			zIndex='999'
			top='0'
			position='fixed'
			w='full'
			px={6}
			py={2}
		>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<Link href='/'>
					<Image
						src={'/assets/Logo.png'}
						width={32}
						height={32}
						alt='Logo'
					/>
				</Link>

				<Flex alignItems={'center'}>
					<HStack spacing={8} alignItems={'center'}>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map(link => (
								<NavLink key={link}>{link}</NavLink>
							))}
							{session?.user ? (
								<>
									<Button
										as={'a'}
										href='/add'
										variant={'solid'}
										colorScheme={'teal'}
										size={'sm'}
										mr={4}
										leftIcon={<AiOutlinePlus />}
									>
										Add
									</Button>
									<Button
										as={'a'}
										href='/search'
										variant={'solid'}
										// colorScheme={'white'}
										size={'sm'}
										mr={4}
										leftIcon={<AiOutlineSearch />}
									>
										Search
									</Button>
								</>
							) : (
								<></>
							)}
						</HStack>
						{session?.user ? (
							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={session?.user.image}
									/>
								</MenuButton>
								<MenuList>
									<MenuItem as={'a'} href='/profile'>
										My Profile
									</MenuItem>
									<MenuItem
										display={{ base: 'unset', md: 'none' }}
									>
										Add
									</MenuItem>
									<MenuDivider />
									<MenuItem onClick={signOut}>
										Sign Out
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<>
								{providers &&
									Object.values(providers).map(provider => (
										<Button
											leftIcon={<AiOutlineGoogle />}
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
									))}
							</>
						)}
					</HStack>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						{Links.map(link => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
