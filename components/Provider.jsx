import React from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { SessionProvider } from 'next-auth/react';

export const metadata = {
	title: 'Insure-Med',
	description: 'Find the best cost for your medical needs'
};

const Provider = ({ children, session }) => {
	return (
		<SessionProvider session={session}>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
		</SessionProvider>
	);
};

export default Provider;
