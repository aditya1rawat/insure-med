'use client';
import Navbar from './components/Navbar';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<Box>
			<Heading>Insure-Med</Heading>
			<Link href='/add'>this page!</Link>
		</Box>
	);
}
