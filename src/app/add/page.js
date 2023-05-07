"use client";

import React, { useState } from "react";
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






export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");


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
      </Box>
    </>
  );
}
