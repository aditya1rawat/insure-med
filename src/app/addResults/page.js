"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import Hospital from "../components/Hospital";
import AuthNavbar from "../components/AuthNavbar";

import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const hospitals = [
  ["1", "Cedars-Sinai Medical Center"],
  ["2", "Ronald Reagan UCLA Medical Center"],
  ["3", "Keck Hospital of USC"],
  ["4", "City of Hope Helford Clinical Research Hospital"],
  ["5", "Huntington Hospital"],
  ["6", "Adventist Health White Memorial"],
  ["7", "UC Irvine Medical Center"],
  ["8", "Providence Holy Cross Medical Center"],
  ["9", "Sharp Chula Vista Medical Center"],
  ["10", "Torrance Memorial Medical Center"],
  ["11", "San Joaquin General Hospital"],
  ["12", "Mercy Medical Center Redding"],
  ["13", "San Mateo Medical Center"],
  ["14", "Mercy Medical Center Merced"],
  ["15", "Santa Barbara Cottage Hospital"],
  ["16", "Sutter Health Sacramento Sierra Region"],
  ["17", "San Leandro Hospital"],
  ["18", "Enloe Medical Center"],
  ["19", "Valley Presbyterian Hospital"],
  ["20", "Ventura County Medical Center"],
  ["21", "NorthBay Medical Center"],
  ["22", "O'Connor Hospital"],
  ["23", "Mercy Medical Center Mt. Shasta"],
  ["24", "Riverside Community Hospital"],
  ["25", "St. Joseph's Medical Center of Stockton"],
  ["26", "Queen of the Valley Medical Center"],
  ["27", "Dominican Hospital"],
  ["28", "Marian Regional Medical Center"],
  ["29", "San Gabriel Valley Medical Center"],
  ["30", "Pomona Valley Hospital Medical Center"],
  ["31", "St. Joseph Hospital - Orange"],
  ["32", "El Camino Hospital"],
  ["33", "Marin General Hospital"],
  ["34", "St. Mary Medical Center"],
  ["35", "West Hills Hospital & Medical Center"],
  ["36", "Sutter Medical Center"],
  ["37", "Huntington Memorial Hospital"],
  ["38", "UC San Diego Health - Hillcrest"],
  ["39", "California Pacific Medical Center"],
  ["40", "Sharp Memorial Hospital"],
  ["41", "Santa Clara Valley Medical Center"],
  ["42", "San Francisco General Hospital"],
  ["43", "Ventura County Medical Center"],
  ["44", "St. Joseph Hospital - Orange"],
  ["45", "John Muir Health - Walnut Creek Medical Center"],
  ["46", "Pomona Valley Hospital Medical Center"],
  ["47", "Stanford Health Care"],
  ["48", "Community Hospital Long Beach"],
  ["49", "Eisenhower Health"],
  ["50", "John Muir Health - Concord Medical Center"],
  ["51", "San Antonio Regional Hospital"],
  ["52", "San Gorgonio Memorial Hospital"],
  ["53", "Temecula Valley Hospital"],
  ["54", "Hoag Memorial Hospital Presbyterian"],
  ["55", "Henry Mayo Newhall Hospital"],
  ["56", "Loma Linda University Medical Center"],
  ["57", "Providence Saint Joseph Medical Center"],
  ["58", "Foothill Presbyterian Hospital"],
  ["59", "Northridge Hospital Medical Center"],
  ["60", "Palomar Medical Center"],
  ["61", "Sonoma Valley Hospital"],
  ["62", "St. Bernardine Medical Center"],
  ["63", "St. Francis Medical Center"],
  ["64", "Adventist Health Simi Valley"],
  ["65", "John F. Kennedy Memorial Hospital"],
  ["66", "San Ramon Regional Medical Center"],
  ["67", "Sutter Santa Rosa Regional Hospital"],
  ["68", "Sierra Nevada Memorial Hospital"],
  ["69", "St. Joseph Hospital - Eureka"],
  ["70", "Sutter Delta Medical Center"],
  ["71", "Kaiser Permanente Fresno Medical Center"],
  ["72", "Petaluma Valley Hospital"],
  ["73", "Sutter Amador Hospital"],
  ["74", "Sutter Auburn Faith Hospital"],
  ["75", "Twin Cities Community Hospital"],
  ["76", "Alameda Hospital"],
  ["77", "Barstow Community Hospital"],
  ["78", "Clovis Community Medical Center"],
  ["79", "Community Hospital of San Bernardino"],
  ["80", "El Centro Regional Medical Center"],
  ["81", "Fort Bragg Hospital"],
  ["82", "Inland Valley Medical Center"],
  ["83", "John Muir Health - Brentwood Medical Center"],
  ["84", "Menifee Global Medical Center"],
  ["85", "Mills-Peninsula Medical Center"],
  ["86", "Pioneers Memorial Healthcare District"],
  ["87", "Rideout Memorial Hospital"],
  ["88", "San Joaquin Valley Rehabilitation Hospital"],
  ["89", "Santa Rosa Memorial Hospital"],
  ["90", "Sequoia Hospital"],
  ["91", "Shasta Regional Medical Center"],
  ["92", "St. Elizabeth Community Hospital"],
  ["93", "St. Helena Hospital"],
  ["94", "St. Joseph's"],
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyD5lpEZLs4wMdVaDnLcJBIBF5rKDFkF3uM",
    authDomain: "insurmed.firebaseapp.com",
    projectId: "insurmed",
    storageBucket: "insurmed.appspot.com",
    messagingSenderId: "124294632140",
    appId: "1:124294632140:web:1e371ccd0e45168bb8e869",
    measurementId: "G-FX4YTDHH33",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

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
      <AuthNavbar />
      <Box
        style={{
          width: "60%",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <VStack>
          <InputGroup
            style={{
              marginTop: 10,
              position: "sticky",
              zIndex: 10,
              top: 0,
            }}
          >
            <InputLeftElement pointerEvents={"none"}>
              <SearchIcon color={"black"} />
            </InputLeftElement>
            <Input
              type={"tel"}
              placeholder={"Search for Procedures"}
              style={{ borderRadius: 30 }}
              value={searchTerm}
              onChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value);
                console.log(searchTerm);
              }}
            />
            <InputRightElement>
              <CloseIcon
                color={"black"}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchTerm("");
                }}
              />
            </InputRightElement>
          </InputGroup>

          <Link href="/addResults">
            <Button>Search</Button>
          </Link>
        </VStack>
        {/* {hospitals.forEach((hospital) => {
          return <Hospital name={hospital[1]} phoneNumber={3245} />;
        })} */}

        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
        <Hospital
          name={hospitals[Math.floor(Math.random() * (99 - 0) + 0)][1]}
        />
      </Box>
    </>
  );
}
