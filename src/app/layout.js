'use client';

import { Providers } from './providers';
// import './globals.css';
import Navbar from './components/Navbar';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import AuthNavbar from './components/AuthNavbar';

export default function RootLayout({ children }) {
	return (
		<>
			<Providers>
				{children}
				<Footer />
			</Providers>
		</>
	);
}
