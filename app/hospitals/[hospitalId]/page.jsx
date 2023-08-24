'use client';

import {
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';

export default function Page({ params }) {
	console.log(params.hospitalId);
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [link, setLink] = useState('');

	useEffect(() => {
		if (params.hospitalId == 'nbh') {
			setName('Newport Beach Hospital');
			setImage(
				'https://sabp.com/wp-content/uploads/2018/06/Newport-Beach-Logo.png'
			);
			setLink(
				'https://www.hoag.org/locations/hoag-hospital-newport-beach/'
			);
		} else if (params.hospitalId == 'hh') {
			setName('Hoag Hospital');
			setImage(
				'https://rehabnow.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/Hoag-Health-Center-California-logo-square-CA0471-200x200.jpg.webp'
			);
			setLink('https://www.hoag.org/locations/hoag-hospital-irvine/');
		} else if (params.hospitalId == 'umc') {
			setName('UCI Medical Center');
			setImage(
				'https://media.glassdoor.com/sqll/121814/uc-irvine-health-squarelogo-1407538419770.png'
			);
			setLink('https://www.ucihealth.org/');
		} else if (params.hospitalId == 'ukh') {
			setName('USC Keck Hospital');
			setImage(
				'https://mma.prnewswire.com/media/409832/USC_CBC_Of_Keck_Medicine_Logo.jpg'
			);
			setLink(
				'https://www.keckmedicine.org/locations/1500-san-pablo-st-los-angeles/'
			);
		} else if (params.hospitalId == 'cgmc') {
			setName('Chapman Global Medical Center');
			setImage(
				'https://media.licdn.com/dms/image/C4E03AQHX3XengfGdHQ/profile-displayphoto-shrink_800_800/0/1517364058853?e=1697673600&v=beta&t=jUZurZhIltoiccORjjtG2o_Kms9Vsj9QaS0D42LPL0o'
			);
			setLink('https://www.chapmanglobalmedicalcenter.com/');
		} else if (params.hospitalId == 'gghmc') {
			setName('Garden Grove Hospital And Medical Center');
			setImage(
				'https://us1-photo.nextdoor.com/pages_avatar_photos/f4/c9/f4c9a75a216dcfb985bc3a6362c86136.png'
			);
			setLink('https://gardengrovehospital.com/');
		}
	});

	return (
		<Center
			py={6}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'100vh'}
		>
			<Stack
				borderWidth='1px'
				borderRadius='lg'
				w={{ sm: '100%', md: '540px' }}
				height={{ sm: '476px', md: '20rem' }}
				direction={{ base: 'column', md: 'row' }}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				padding={4}
			>
				<Flex flex={1} alignItems={'center'} justifyContent={'center'}>
					<Image
						// objectFit='cover'
						// width={'100%'}
						// height={'200px'}
						// boxSize='100%'
						src={image}
						alt='Hospital Logo'
					/>
				</Flex>
				<Stack
					flex={1}
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					p={1}
					pt={2}
				>
					<Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
						{name}
					</Heading>
					<Text
						textAlign={'center'}
						// eslint-disable-next-line react-hooks/rules-of-hooks
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						Average Range for Procedures:
					</Text>
					<Text
						textAlign={'center'}
						// eslint-disable-next-line react-hooks/rules-of-hooks
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						${Math.floor(Math.random() * (3314 - 2298 + 1)) + 2293}{' '}
						- $
						{Math.floor(Math.random() * (7314 - 4298 + 1)) + 4293}
					</Text>

					<Button
						as={'a'}
						href={`${link}`}
						// flex={1}
						fontSize={'sm'}
						width={'100%'}
						height={'50px'}
						rounded={'md'}
						_focus={{
							bg: 'gray.200'
						}}
						target='_blank'
					>
						Visit Website
					</Button>
				</Stack>
			</Stack>
		</Center>
	);
}
