'use client';
import {
	Box,
	Button,
	Flex,
	HStack,
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
			<Box
				direction={{ base: 'column', md: 'row' }}
				style={{
					background:
						'linear-gradient(175deg, #b92b27, #A600EA, #6DD5FA 70%, #FFF calc(75%))'
				}}
				height={'49vh'}
			>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					mx='48'
					py={'56'}
					alignItems={'center'}
				>
					<Box>
						<Box opacity={'65%'}>
							<Heading fontSize={'90px'}>
								Your Healthcare,
							</Heading>
							<Heading fontSize={'70px'}>
								<u>Simplified</u>
							</Heading>
						</Box>

						<HStack spacing={'5'} my={'10'}>
							<Button
								as={'a'}
								href='/add'
								leftIcon={<BsSearch />}
								bgColor={'black'}
								colorScheme='teal'
								variant='solid'
								size={'md'}
								_hover={{
									backgrouColor: 'black'
								}}
							>
								Search
							</Button>
							<Button
								as={'a'}
								variant='outline'
								size={'md'}
								href='/signup'
							>
								Register
							</Button>
						</HStack>
					</Box>
					<Image src='/appdemo.svg' width={'600px'} height={'auto'} />
				</Box>
			</Box>
			<Box height={'37vh'}></Box>
		</>
	);
}
