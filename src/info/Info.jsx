import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  LightMode,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { commercial, residential } from "../datastore";
import AddressCard from "./AddressCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Leads from './Leads';

const Info = () => {
  const loc = useLocation().pathname.split("/");
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    let data;
    data = residential.find((i) => i.id === loc[loc.length - 1]);
    if (!data) {
      data = commercial.find((i) => i.id === loc[loc.length - 1]);
    }
    if (data === undefined) {
      navigate("/404", { replace: true });
    } else {
      setData(data);
    }
  }, []);

  return (
    <Box w="100%" pb={10}>
      {!data && (
        <Flex w="100%" h="70vh" align="center" justify="center">
          <Spinner color="yellow" />
        </Flex>
      )}
      {data && (
        <LightMode>
          <Box
            w="100%"
            h={{ base: "350px", md: "500px", lg: "80vh" }}
            backgroundImage={data.banner}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></Box>
          <Box p={6} px={{ base: 5, md: "12vw", lg: "15vw" }}>
            <VStack>
              <Heading>{data.name}</Heading>
              <Heading fontSize="2xl">{"@ " + data.location}</Heading>
            </VStack>
            <Text
              fontWeight="medium"
              mt={6}
              color="blue.900"
              whiteSpace="pre-line"
            >
              {data.description}
            </Text>
            <HStack align="center" mt={10}>
              <Text
                fontWeight="semibold"
                color="blue.900"
                whiteSpace="pre-line"
              >
                STATUS:
              </Text>
              <Badge
                p={1}
                borderRadius="md"
                colorScheme={data.isCompleted ? "green" : "orange"}
              >
                {data.isCompleted ? "Completed" : "Ongoing"}
              </Badge>
              <Box w="40px" />
              {data.brochure && (
                <Button
                  ms={10}
                  colorScheme="yellow"
                  variant="solid"
                  onClick={() => window.open(data.brochure)}
                >
                  View Brochure
                </Button>
              )}
            </HStack>
            <AddressCard address={data.address} />
            {data.siteplans && (
              <Box mt={10}>
                <Heading fontSize="3xl" color="blue.700">
                  Siteplans
                </Heading>
                <Box pt={4}>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {data.siteplans.map((s, i) => (
                      <SwiperSlide key={i}>
                        <motion.div whileHover={{ opacity: 0.74 }}>
                          <Image
                            src={s}
                            borderRadius="xl"
                            m={5}
                            boxShadow="0px 0px 30px 4px #2e518e33;"
                            cursor="pointer"
                            onClick={() => {
                              window.open(s);
                            }}
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </Box>
            )}

            {data.unitplans && (
              <Box mt={10}>
                <Heading fontSize="3xl" color="blue.700">
                  Unitplans
                </Heading>
                <Box pt={4}>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {data.unitplans.map((s, i) => (
                      <SwiperSlide key={i}>
                        <motion.div whileHover={{ opacity: 0.74 }}>
                          <Image
                            src={s}
                            borderRadius="xl"
                            m={5}
                            boxShadow="0px 0px 30px 4px #2e518e33;"
                            cursor="pointer"
                            onClick={() => {
                              window.open(s);
                            }}
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </Box>
            )}
          </Box>
          <Leads />
        </LightMode>
      )}
    </Box>
  );
};

export default Info;
