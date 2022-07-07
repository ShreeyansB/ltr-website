import {
  AspectRatio,
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SecCard from "./SecCard";
import "swiper/css";
import "swiper/css/pagination";
import { commercial, residential } from "../datastore";

const Sections = () => {
  const variant = useBreakpointValue({ base: "1", md: "3", lg: "4" });

  return (
    <Box px={{ base: 5, md: "5vw", lg: "7vw" }} py="3rem">
      <Text fontWeight="medium" color="yellow.500">
        Take a look at our
      </Text>
      <Heading fontSize="3xl" color="blue.700">
        Residential Projects
      </Heading>
      <Box pt={4}>
        <Swiper
          slidesPerView={variant}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {residential.map((data) => (
            <SwiperSlide key={data.id}>
              <SecCard data={data} key={data.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Text fontWeight="medium" color="yellow.500">
        and our ...
      </Text>
      <Heading fontSize="3xl" color="blue.700">
        Commercial Projects
      </Heading>
      <Box pt={4}>
        <Swiper
          slidesPerView={variant}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {commercial.map((data) => (
            <SwiperSlide key={data.id}>
              <SecCard data={data} key={data.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box>
        <Heading fontSize="3xl" color="blue.700" mt={5}>
          About Us
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="100%"
          justify="space-between"
          spacing={5}
          align="center"
        >
          <Text w={{ base: "100%", md: "50%" }}>
            Established in 2011, L&T Realty is the real estate arm of Larsen and
            Toubro and a trendsetter amidst real estate developers in India.
            With an extensive portfolio spanning 6.50 mn. square metres (i.e. 70
            mn sqft) across Residential, Commercial and Retail developments, the
            company is currently present in Mumbai, Navi Mumbai, NCR, Bengaluru,
            Hyderabad and Chennai. L&T Realty is committed to creating landmarks
            of excellence and providing customer delight at every touch point,
            through design innovation and operational excellence. The business
            has built a reputation of standing by its promises and embracing the
            power of digitization and new technologies into its core strategy
            for growth.
          </Text>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/hGSqk5Gnk0w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sections;
