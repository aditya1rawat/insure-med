'use client';

import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const hospitals = [
	['1', 'Cedars-Sinai Medical Center'],
	['2', 'Ronald Reagan UCLA Medical Center'],
	['3', 'Keck Hospital of USC'],
	['4', 'City of Hope Helford Clinical Research Hospital'],
	['5', 'Huntington Hospital'],
	['6', 'Adventist Health White Memorial'],
	['7', 'UC Irvine Medical Center'],
	['8', 'Providence Holy Cross Medical Center'],
	['9', 'Sharp Chula Vista Medical Center'],
	['10', 'Torrance Memorial Medical Center'],
	['11', 'San Joaquin General Hospital'],
	['12', 'Mercy Medical Center Redding'],
	['13', 'San Mateo Medical Center'],
	['14', 'Mercy Medical Center Merced'],
	['15', 'Santa Barbara Cottage Hospital'],
	['16', 'Sutter Health Sacramento Sierra Region'],
	['17', 'San Leandro Hospital'],
	['18', 'Enloe Medical Center'],
	['19', 'Valley Presbyterian Hospital'],
	['20', 'Ventura County Medical Center'],
	['21', 'NorthBay Medical Center'],
	['22', "O'Connor Hospital"],
	['23', 'Mercy Medical Center Mt. Shasta'],
	['24', 'Riverside Community Hospital'],
	['25', "St. Joseph's Medical Center of Stockton"],
	['26', 'Queen of the Valley Medical Center'],
	['27', 'Dominican Hospital'],
	['28', 'Marian Regional Medical Center'],
	['29', 'San Gabriel Valley Medical Center'],
	['30', 'Pomona Valley Hospital Medical Center'],
	['31', 'St. Joseph Hospital - Orange'],
	['32', 'El Camino Hospital'],
	['33', 'Marin General Hospital'],
	['34', 'St. Mary Medical Center'],
	['35', 'West Hills Hospital & Medical Center'],
	['36', 'Sutter Medical Center'],
	['37', 'Huntington Memorial Hospital'],
	['38', 'UC San Diego Health - Hillcrest'],
	['39', 'California Pacific Medical Center'],
	['40', 'Sharp Memorial Hospital'],
	['41', 'Santa Clara Valley Medical Center'],
	['42', 'San Francisco General Hospital'],
	['43', 'Ventura County Medical Center'],
	['44', 'St. Joseph Hospital - Orange'],
	['45', 'John Muir Health - Walnut Creek Medical Center'],
	['46', 'Pomona Valley Hospital Medical Center'],
	['47', 'Stanford Health Care'],
	['48', 'Community Hospital Long Beach'],
	['49', 'Eisenhower Health'],
	['50', 'John Muir Health - Concord Medical Center'],
	['51', 'San Antonio Regional Hospital'],
	['52', 'San Gorgonio Memorial Hospital'],
	['53', 'Temecula Valley Hospital'],
	['54', 'Hoag Memorial Hospital Presbyterian'],
	['55', 'Henry Mayo Newhall Hospital'],
	['56', 'Loma Linda University Medical Center'],
	['57', 'Providence Saint Joseph Medical Center'],
	['58', 'Foothill Presbyterian Hospital'],
	['59', 'Northridge Hospital Medical Center'],
	['60', 'Palomar Medical Center'],
	['61', 'Sonoma Valley Hospital'],
	['62', 'St. Bernardine Medical Center'],
	['63', 'St. Francis Medical Center'],
	['64', 'Adventist Health Simi Valley'],
	['65', 'John F. Kennedy Memorial Hospital'],
	['66', 'San Ramon Regional Medical Center'],
	['67', 'Sutter Santa Rosa Regional Hospital'],
	['68', 'Sierra Nevada Memorial Hospital'],
	['69', 'St. Joseph Hospital - Eureka'],
	['70', 'Sutter Delta Medical Center'],
	['71', 'Kaiser Permanente Fresno Medical Center'],
	['72', 'Petaluma Valley Hospital'],
	['73', 'Sutter Amador Hospital'],
	['74', 'Sutter Auburn Faith Hospital'],
	['75', 'Twin Cities Community Hospital'],
	['76', 'Alameda Hospital'],
	['77', 'Barstow Community Hospital'],
	['78', 'Clovis Community Medical Center'],
	['79', 'Community Hospital of San Bernardino'],
	['80', 'El Centro Regional Medical Center'],
	['81', 'Fort Bragg Hospital'],
	['82', 'Inland Valley Medical Center'],
	['83', 'John Muir Health - Brentwood Medical Center'],
	['84', 'Menifee Global Medical Center'],
	['85', 'Mills-Peninsula Medical Center'],
	['86', 'Pioneers Memorial Healthcare District'],
	['87', 'Rideout Memorial Hospital'],
	['88', 'San Joaquin Valley Rehabilitation Hospital'],
	['89', 'Santa Rosa Memorial Hospital'],
	['90', 'Sequoia Hospital'],
	['91', 'Shasta Regional Medical Center'],
	['92', 'St. Elizabeth Community Hospital'],
	['93', 'St. Helena Hospital'],
	['94', "St. Joseph's"]
];

export default function Search() {
	const [value, setValue] = useState('');

	function onChange(event) {
		setValue(event.target.value);
		console.log(value);
	}

	function onSearch(searchTerm) {
		console.log('search ', searchTerm);
	}

	return (
		<Box>
			<input type='text' value={value} onChange={onChange} />
			<button onClick={onSearch(value)}>Search</button>
		</Box>
	);
}
