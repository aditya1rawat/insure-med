'use client';

import React from 'react';

import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/account';

export default function Page() {
	const session = useSession();
	const supabase = useSupabaseClient();
	return (
		<div>
			<div className='container' style={{ padding: '50px 0 100px 0' }}>
				{!session ? (
					<Auth supabaseClient={supabase} />
				) : (
					<Account session={session} />
				)}
			</div>
		</div>
	);
}
