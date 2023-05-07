'use client';

import React, { useState, useEffect } from 'react';
import {
	Input,
	Stack,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Box,
	VStack,
	Button,
	Link
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

import Hospital from '../components/Hospital';
import AuthNavbar from '../components/AuthNavbar';

import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function Page() {
	const [searchTerm, setSearchTerm] = useState('');

	// const firebaseConfig = {
	// 	apiKey: 'AIzaSyD5lpEZLs4wMdVaDnLcJBIBF5rKDFkF3uM',
	// 	authDomain: 'insurmed.firebaseapp.com',
	// 	projectId: 'insurmed',
	// 	storageBucket: 'insurmed.appspot.com',
	// 	messagingSenderId: '124294632140',
	// 	appId: '1:124294632140:web:1e371ccd0e45168bb8e869',
	// 	measurementId: 'G-FX4YTDHH33'
	// };

	// // Initialize Firebase
	// const app = initializeApp(firebaseConfig);

	// const db = getFirestore(app);

	//   useEffect(() => {
	//     hospitals.forEach((hospital) => {
	//       console.log(hospital);
	//     });
	//   });

	//   useEffect(() => {
	//     alert("why not running");
	//     const fetchStuff = async () => {
	//       const hospitalsRef = collection(db, "Hospitals", "El Camino Hospital");
	//       const docSnap = await getDoc(hospitalsRef);
	//       console.log("Document data:", docSnap.data());
	//     };

	//     fetchStuff();
	//   }, []);

	return (
		<>
			<Box
				style={{
					width: '60%',
					margin: 'auto',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<VStack>
					<InputGroup
						style={{
							marginTop: 10,
							position: 'sticky',
							zIndex: 10,
							top: 0
						}}
					>
						<InputLeftElement pointerEvents={'none'}>
							<SearchIcon color={'black'} />
						</InputLeftElement>
						<Input
							type={'tel'}
							placeholder={'Search for Procedures'}
							style={{ borderRadius: 30 }}
							value={searchTerm}
							onChange={e => {
								e.preventDefault();
								setSearchTerm(e.target.value);
								console.log(searchTerm);
							}}
						/>
						<InputRightElement>
							<CloseIcon
								color={'black'}
								onClick={e => {
									e.preventDefault();
									setSearchTerm('');
								}}
							/>
						</InputRightElement>
					</InputGroup>

					<Link href='/addResults'>
						<Button>Search</Button>
					</Link>
				</VStack>
				{/* {hospitals.forEach((hospital) => {
          return <Hospital name={hospital[1]} phoneNumber={3245} />;
        })} */}

				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
				<Hospital
					name={
						hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]
					}
				/>
			</Box>
		</>
	);
}
