'use client';

import React, { useState } from 'react';
import {
	Input,
	Stack,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Box
} from '@chakra-ui/react';
// import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSearch, BsDoorClosed } from 'react-icons/bs';
import Hospital from '../../components/Hospital';

import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { useRouter } from 'next/navigation';

const hospitals = [
	{ value: 'nbh', label: 'Newport Beach Hospital' },
	{ value: 'hh', label: 'Hoag Hospital' },
	{ value: 'umc', label: 'UCI Medical Center' },
	{ value: 'ukh', label: 'USC Keck Hospital' },
	{ value: 'cgmc', label: 'Chapman Global Medical Center' },
	{ value: 'gghmc', label: 'Garden Grove Hospital And Medical Center' }
];

export default function Page() {

	const router = useRouter();

	const [searchTerm, setSearchTerm] = useState('');
	const [show, setShow] = useState(false);

	const [pickerItems, setPickerItems] = React.useState(hospitals);
	const [selectedItems, setSelectedItems] = React.useState([]);

	const handleCreateItem = item => {
		setPickerItems(curr => [...curr, item]);
		setSelectedItems(curr => [...curr, item]);
	};

	const handleSelectedItemsChange = selectedItems => {
		if (selectedItems) {
			console.log(selectedItems[0].value);
			router.push(`/hospitals/${selectedItems[0].value}`)
			setSelectedItems(selectedItems);
		}
	};

	return (
		<Box
			style={{
				width: '60%',
				margin: 'auto',
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box mt={'24'}>

			<CUIAutoComplete
				label='Find Hospitals Near You'
				placeholder='Type a Hospital'
				onCreateItem={handleCreateItem}
				items={pickerItems}
				selectedItems={selectedItems}
				onSelectedItemsChange={changes =>
					handleSelectedItemsChange(changes.selectedItems)
				}
			/>
			</Box>

			{show ? (
				<>
					<Hospital name={'Newport Beach Hospital'} />
					<Hospital name={'Hoag Hospital'} />
					<Hospital name={'UCI Medical Center'} />
					<Hospital name={'USC Keck Hospital'} />
				</>
			) : null}
		</Box>
	);
}
