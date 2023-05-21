import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
	useColorModeValue,
	Collapse
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ProcedureCostProfileCard() {
	const [show, setShow] = useState(false);

	const handleToggle = () => {
		setShow(show => !show);
	};

	return (
		<Center py={6}>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
			>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					Procedure Name
				</Heading>
				<Text fontWeight={600} color={'gray.500'}>
					$ Cost
				</Text>

				<Heading fontSize={'md'} mt={5} mb={1}>
					Extra Information
				</Heading>
				<Collapse
					color={useColorModeValue('gray.700', 'gray.400')}
					px={3}
					startingHeight={50}
					in={show}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Cumque atque similique nam ducimus repudiandae eaque?
					Reprehenderit repudiandae distinctio quam, cumque cum
					molestias ipsa nemo explicabo aliquam quia voluptate a ex.
				</Collapse>
				<Text
					fontSize='xs'
					textAlign={'right'}
					onClick={handleToggle}
					mt='1'
					cursor={'pointer'}
				>
					Show {show ? 'Less' : 'More'}
				</Text>

				<Stack mt={8} direction={'row'} spacing={4}>
					<Button
						flex={1}
						fontSize={'sm'}
						_focus={{
							bg: 'gray.200'
						}}
					>
						Edit
					</Button>
					<Button
						flex={1}
						fontSize={'sm'}
						bg={'red.400'}
						color={'white'}
						w='full'
						_hover={{
							bg: 'red.500'
						}}
						boxShadow={
							'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
						}
					>
						Delete
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}
