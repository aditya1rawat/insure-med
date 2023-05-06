'use client';

import React from 'react';

import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/account';
import { ThemeSupa } from '@supabase/auth-ui-shared';

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
						<Auth
							supabaseClient={supabase}
							appearance={{ theme: ThemeSupa }}
						/>
					) : (
						<Account session={session} />
					)}
				</div>
			</div>
		</div>
	);
}
