'use client';

import { Providers } from './providers';
import Navbar from './components/Navbar';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
	return (
		<>
			<Providers>
				<Navbar />
				{children}
				<Footer />
			</Providers>
		</>
	);
}
