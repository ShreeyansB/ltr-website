import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AddressCard = (props) => {
  const svgURL =
    "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/solid/location-marker.svg";

  const mapsHandler = () => {
    window.open("https://www.google.com/maps/search/" + props.address);
  };

  return (
    <Box
      as={motion.div}
      bg="blue.900"
      {...props}
      p={4}
      borderRadius="2xl"
      mt={10}
      cursor="pointer"
      initial={{
        boxShadow: "none",
      }}
      maxW="50rem"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 86px -16px rgba(47,68,145,0.5)",
      }}
      onClick={mapsHandler}
    >
      <HStack spacing={5}>
        <motion.div
          animate={{
            x: 0,
            y: -7,
          }}
          transition={{
            repeat: "Infinity",
            repeatType: "mirror",
            duration: 0.8,
          }}
        >
          <Image
            src={svgURL}
            w="53px"
            filter="contrast(100%) invert() sepia(100%) saturate(10000%) hue-rotate(320deg);"
          />
        </motion.div>
        <Text color="white"> {props.address}</Text>
      </HStack>
    </Box>
  );
};

export default AddressCard;
