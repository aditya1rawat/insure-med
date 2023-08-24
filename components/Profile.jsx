import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue,
	VStack,
	SimpleGrid
} from '@chakra-ui/react';

import ProcedureCostProfileCard from './ProcedureCostProfileCard';
import { useEffect } from 'react';

export default function Profile({ name, email, image, serviceProvider, data }) {

	return (
		<Stack
			mx={'auto'}
			direction={'row'}
			justifyContent={'space-around'}
			alignItems={'center'}
			spacing={'10'}
			mt={'24'}
		>
			<Box
				w='45%'
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'md'}
				display={'flex'}
				flexDir={'column'}
				alignItems={'center'}
			>
				<Flex justify={'center'} mt={-12}>
					<Avatar
						size={'xl'}
						src={image}
						alt={'Author'}
						css={{
							border: '2px solid white'
						}}
					/>
				</Flex>

				<Box
					p={6}
					display={'flex'}
					alignItems={'center'}
					flexDir={'column'}
				>
					<Stack spacing={0} align={'center'} mb={5}>
						<Heading
							fontSize={'2xl'}
							fontWeight={500}
							fontFamily={'body'}
						>
							{name}
						</Heading>
						<Text color={'gray.500'}>{email}</Text>
					</Stack>

					<Stack spacing={0} align={'center'}>
						<Text fontSize={'sm'} color={'gray.500'}>
							Service Provider
						</Text>
						<Text fontWeight={600}>{serviceProvider}</Text>
					</Stack>

					<Button
						as={'a'}
						href='/profile/edit'
						width={'75%'}
						mx={'auto'}
						mt={8}
						bg={useColorModeValue('#151f21', 'gray.900')}
						color={'white'}
						rounded={'md'}
						_hover={{
							transform: 'translateY(-2px)',
							boxShadow: 'lg'
						}}
					>
						Edit Profile
					</Button>
				</Box>
			</Box>
			<SimpleGrid columns={2} spacing={10}>
				{data.map(procedure => {
					console.log(procedure._id);
					return <ProcedureCostProfileCard procedureId={procedure._id} procedureName={procedure.procedure} cost={procedure.cost} />;
				})}
			</SimpleGrid>
		</Stack>
	);
}
