import { Auth, Typography, Button } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthBasic({ supabase }) {
	return (
		<Auth.UserContextProvider supabaseClient={supabase}>
			<Auth
				supabaseClient={supabase}
				providers={[]}
				appearance={{ theme: ThemeSupa }}
			/>
		</Auth.UserContextProvider>
	);
}
