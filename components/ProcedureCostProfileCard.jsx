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
	Collapse,
	useDisclosure,
	ModalOverlay,
	Modal,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

export default function ProcedureCostProfileCard({
	procedureId,
	procedureName,
	cost
}) {
	const { data: session } = useSession();

	const handleSubmit = async () => {
		const response = await fetch(`/api/procedureCost`, {
			method: 'DELETE',
			body: JSON.stringify({
				_id: procedureId
			})
		});

		if (response.ok) {
			console.log('Successful Delete');
			router.push('/');
		} else {
			console.log('Unsuccessful Delete');
		}
	};

	return (
		<Center>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					{procedureName}
				</Heading>
				<Text fontWeight={600} color={'gray.500'} marginTop={'5'}>
					${cost}
				</Text>

				{/* <Stack mt={8} direction={'row'} spacing={4}>
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
						onClick={handleSubmit}
					>
						Delete
					</Button>
				</Stack> */}
			</Box>
		</Center>
	);
}
