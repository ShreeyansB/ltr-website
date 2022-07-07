import {
  Box,
  LightMode,
  Image,
  Badge,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const SecCard = ({ data }) => {
  return (
    <motion.div whileHover={{ opacity: 0.83 }}>
      <LightMode>
        <Link href={"/info/" + data.id}>
          <Box
            borderRadius="2xl"
            boxShadow="12px 12px 50px -20px rgba(93,151,232,0.4)"
            bg="blue.50"
            bgGradient="linear(to-r, blackAlpha.50, white)"
            w="fit-content"
            mb={10}
          >
            <Image
              src={data.banner}
              height="11rem"
              width="20rem"
              objectFit="cover"
              borderTopRadius="2xl"
            />
            <Box px={3} pb={3}>
              <HStack mt={3}>
                <Badge
                  colorScheme={data.isCompleted ? "green" : "yellow"}
                  borderRadius="lg"
                  variant="subtle"
                >
                  {data.isCompleted ? "COMPLETED" : "ONGOING"}
                </Badge>
                <Text
                  fontWeight="medium"
                  fontSize="0.8rem"
                  opacity={0.7}
                  noOfLines={1}
                >
                  {data.location}
                </Text>
              </HStack>
              <Text
                fontSize="1.1rem"
                fontWeight="semibold"
                mt={0}
                noOfLines={1}
              >
                {data.name}
              </Text>
            </Box>
          </Box>
        </Link>
      </LightMode>
    </motion.div>
  );
};

export default SecCard;
