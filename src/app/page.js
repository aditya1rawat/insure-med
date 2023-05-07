'use client';
import {
	Button,
	Flex,
	Heading,
	Image,
	Link,
	LinkOverlay,
	Stack,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';
import AuthNavbar from './components/AuthNavbar';
import { BsSearch } from 'react-icons/bs';

export default function SplitScreen() {
	return (
		<>
			<AuthNavbar />
			{/* <Stack
				minH={'100vh'}
				direction={{ base: 'column', md: 'row' }}
				style={{
					background: 'url(/BackgroundGradient.png)'
				}}
			>
				<Flex p={8} flex={1} align={'center'} justify={'center'}>
					<Stack spacing={6} w={'full'} maxW={'lg'}>
						<Heading
							fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
						>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: useBreakpointValue({
										base: '20%',
										md: '30%'
									}),
									position: 'absolute',
									bottom: 1,
									left: 0,
									bg: 'blue.400',
									zIndex: -1
								}}
							>
								Your Healthcare
							</Text>
							<br />{' '}
							<Text color={'blue.400'} as={'span'}>
								Simplified
							</Text>{' '}
						</Heading>
						<Text
							fontSize={{ base: 'md', lg: 'lg' }}
							color={'gray.500'}
						>
							Say goodbye to those big medical bills!
						</Text>
						<Stack
							direction={{ base: 'column', md: 'row' }}
							spacing={4}
						>
							<Button
								rounded={'full'}
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500'
								}}
								leftIcon={<BsSearch />}
							>
								Search
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1}>
					<Image
						alt={'Login Image'}
						objectFit={'cover'}
						src={
							'https://img.freepik.com/premium-photo/close-up-stethoscope-computer-keyboard-white-desk-online-health-care-telemedicine-concept-medical-background_136875-2032.jpg?w=2000'
						}
					/>
				</Flex>
			</Stack> */}
			<Link href='/add'>
				<Image
					alt={'Landing'}
					objectFit={'cover'}
					width={'100%'}
					src={'/Home.svg'}
				/>
			</Link>
			<Link href='/signup'>
				<Image
					alt={'Landing'}
					objectFit={'cover'}
					width={'100%'}
					src={'/register.svg'}
				/>
			</Link>
		</>
	);
}
