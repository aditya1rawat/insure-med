'use client';

import React from 'react';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/account';

import AuthBasic from '../components/SignUp';
import SignUp from '../components/SignUp';
import { Box } from '@chakra-ui/react';

export default function Page() {
	const session = useSession();
	const supabase = useSupabaseClient();
	return (
		<Box minH={'85vh'}>
			{!session ? (
				// <Auth supabaseClient={supabase} />
				// <Auth
				// 	supabaseClient={supabase}
				// 	appearance={{ theme: ThemeSupa }}
				// />
				<SignUp supabase={supabase} />
			) : (
				<Account session={session} />
			)}
		</Box>
	);
}
