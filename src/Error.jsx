import { DarkMode, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <VStack
      w="100%"
      h="100vh"
      minH="500px"
      bg="#3D4166"
      spacing={0}
      justify="center"
      align="center"
      pb={10}
      color="white"
    >
      <Text fontWeight="medium" letterSpacing="1.7rem">
        &nbsp;ERROR
      </Text>
      <Heading fontSize="5rem" color='yellow.400'>404</Heading>
      <Text fontWeight="medium" letterSpacing="0.09rem">PAGE &nbsp;NOT &nbsp;FOUND</Text>
    </VStack>
  );
};

export default Error;
