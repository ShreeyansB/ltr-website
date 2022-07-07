import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import LoopText from "./LoopText";
import banner from "../../assets/images/banner.png";
import bannerWebp from "../../assets/images/banner.webp";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <Box
      minH={{ base: "", md: "100vh" }}
      w="100%"
      bgGradient="linear(to-br, #3C3C3C, #101012, #121011)"
      pt="9rem"
      pb={10}
      px={{ base: 5, md: "5vw", lg: "7vw" }}
    >
      <Flex
        justify={{ base: "space-between", lg: "space-around" }}
        align="center"
        minH="20rem"
      >
        <Box color="white" w="30rem">
          <Heading fontSize="2.6rem">Building the landmarks that</Heading>
          <LoopText fontSize="2.55rem" color="#63B3ED" />
          <Text mt={2} pe="4" maxW="23rem" color="whiteAlpha.600">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you.
          </Text>
          <SearchBar />
          <HStack mt={8} align="center" spacing="4rem">
            <Box textAlign="center">
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                Amongst the
                <br /> world's top
              </Text>
              <Heading color="yellow.300" fontSize="2.6rem" fontWeight="normal">
                15
              </Heading>
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                construction
                <br /> companies
              </Text>
            </Box>

            <Box textAlign="center">
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                Market
                <br /> Cap
              </Text>
              <Heading color="yellow.300" fontSize="2.6rem" fontWeight="normal">
                22
              </Heading>
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                billion
                <br /> USD
              </Text>
            </Box>

            <Box textAlign="center">
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                Presence
                <br /> in over
              </Text>
              <Heading color="yellow.300" fontSize="2.6rem" fontWeight="normal">
                30
              </Heading>
              <Text fontSize="0.8rem" opacity="0.4" fontWeight="semibold">
                countries
                <br />
                worldwide
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <picture
            style={{
              pointerEvents: "none",
            }}
          >
            <source srcSet={bannerWebp} type="image/webp" />
            <source srcSet={banner} type="image/png" />
            <img src={banner} alt="Home Art" width="340rem" />
          </picture>
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
