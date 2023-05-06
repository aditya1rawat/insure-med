import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';

import Image from 'next/image';

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Image src='/Logo.png' width={35} height={35} alt='Logo' />
				<Text>
					© {new Date().getFullYear()} Insure Med. All rights
					reserved.
				</Text>
			</Container>
		</Box>
	);
}
