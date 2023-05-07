'use client';

import React from 'react';
import '../globals.css';
import { Box } from '@chakra-ui/react';
import AuthNavbar from '../components/AuthNavbar';

export default function page() {
	return (
		<div>
			<AuthNavbar />
			<Box
				style={{
					background: 'center no-repeat url(/BackgroundGradient.png)'
				}}
			>
				<header class='subheadline'>Your Healthcare Simplified</header>
				<title>Say goodbye to those big medical bills!</title>
				<p>
					we cater to all these insurance providers: aksjdkfgdngiods
				</p>
				<p>Our Mission: xyzabc</p>
				<p class='signUp'>
					Interested? Sign up <href>here</href>
				</p>
			</Box>
		</div>
	);
}
