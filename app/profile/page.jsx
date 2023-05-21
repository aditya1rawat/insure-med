'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import Profile from '../../components/Profile';

export default function MyProfile() {
	const { data: session } = useSession();

	const [serviceProvider, setServiceProvider] = useState();
	const [procedureCosts, setProcedureCosts] = useState([]);

	const getServiceProvider = async () => {
		if (await session?.user) {
			const response = await fetch(
				`/api/serviceProvider/${session?.user.id}`
			);

			const responseData = await response.json();

			await setServiceProvider(responseData.serviceProvider);
		}
	};

	const getProcedureCosts = async () => {
		if (await session?.user) {
			console.log(session?.user.id);
			const response = await fetch(
				`/api/auth/procedureCosts/${session?.user.id}`
			);

			const data = await response.json();
			console.log(data);
			setProcedureCosts(data);
		}
	};

	useEffect(() => {
		getServiceProvider();
		getProcedureCosts();
	}, [getServiceProvider, getProcedureCosts]);

	return (
		<Profile
			name={session?.user.name}
			email={session?.user.email}
			image={session?.user.image}
			data={procedureCosts}
		/>
	);
}
