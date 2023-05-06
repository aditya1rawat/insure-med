import { Auth, Typography, Button } from '@supabase/auth-ui-react';

export default function AuthBasic({ supabase }) {
	return (
		<Auth.UserContextProvider supabaseClient={supabase}>
			<Auth supabaseClient={supabase} providers={[]} />
		</Auth.UserContextProvider>
	);
}
