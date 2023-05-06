'use client';

import React from 'react';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/account';

import AuthBasic from '../components/SignUp';
import SignUp from '../components/SignUp';

export default function Page() {
	const session = useSession();
	const supabase = useSupabaseClient();
	return (
		<div>
			<div
				className='container'
				style={{
					padding: '50px 0 100px 0',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<div style={{ width: '500px' }}>
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
				</div>
			</div>
		</div>
	);
}