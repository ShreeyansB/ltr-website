import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, LightMode, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import spacer from "../../assets/images/patternpad.svg";

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    if (searchText)
      window.location.href =
        "https://www.lntrealty.com/?s=" + searchText.trim();
  };

  return (
    <LightMode>
      <Box mt={7}>
        <Box display={{ base: "none", md: "block" }}>
          <img
            style={{ position: "absolute", marginTop: "1px" }}
            src={spacer}
            height="50px"
            width="100px"
          />
        </Box>
        <HStack
          pe={2}
          ps={4}
          py={1}
          bg="white"
          borderRadius="0.7rem"
          color="black"
          border="3px solid rgba(185, 214, 255, 0.7)"
          transform={{ base: "", md: "translateX(120px)" }}
          boxShadow="xl"
        >
          <SearchIcon color="yellow.500" />
          <Input
            type="search"
            variant="flushed"
            border="none"
            onChange={handleChange}
            placeholder="Search our options"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          <Button
            fontSize="0.8rem"
            px={5}
            colorScheme="yellow"
            onClick={handleClick}
          >
            Search
          </Button>
        </HStack>
      </Box>
    </LightMode>
  );
};

export default SearchBar;
