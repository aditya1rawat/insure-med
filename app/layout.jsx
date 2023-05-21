'use client';

import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Provider from '../components/Provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	);
}
