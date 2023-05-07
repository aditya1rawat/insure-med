"use client";

import React, { useState } from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import Hospital from "../components/Hospital";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box
      style={{
        width: "60%",
        margin: "auto",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <InputGroup
        style={{ marginTop: 10, position: "sticky", zIndex: 10, top: 0 }}
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

      <Hospital />
      <Hospital />
      <Hospital />
      <Hospital />
    </Box>
  );
}
