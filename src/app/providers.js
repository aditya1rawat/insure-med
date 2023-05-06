'use client';

import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import SupabaseProvider from './supabase-provider';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

export function Providers({ children }) {
	const [supabase] = useState(() => createBrowserSupabaseClient());
	return (
		<SupabaseProvider>
			{/* <SessionContextProvider supabaseClient={supabase}> */}
			<ChakraProvider>{children}</ChakraProvider>
			{/* </SessionContextProvider> */}
		</SupabaseProvider>
	);
}
