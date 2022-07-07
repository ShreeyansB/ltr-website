import {
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const links = [
    {
      head: "About L&T Realty",
      links: [
        {
          text: "Our Lineage",
          link: "https://www.lntrealty.com/about-lt",
        },
        {
          text: "Partner with us",
          link: "https://www.lntrealty.com/partner-with-us",
        },
        {
          text: "News & Blogs",
          link: "https://www.lntrealty.com/news-blogs",
        },
        {
          text: "Sustainability",
          link: "https://www.lntrealty.com/csr",
        },
        {
          text: "Sitemap",
          link: "https://www.lntrealty.com/sitemap",
        },
        {
          text: "Careers",
          link: "https://www.lntrealty.com/careers",
        },
      ],
    },

    {
      head: "Other Imp Links",
      links: [
        {
          text: "NRI Corner",
          link: "https://www.lntrealty.com/nri",
        },
        {
          text: "Know Your RERA",
          link: "https://www.lntrealty.com/know-your-rera",
        },
        {
          text: "Buyers Guide",
          link: "https://www.lntrealty.com/buyers-guide",
        },
        {
          text: "Sustainability",
          link: "https://www.lntrealty.com/csr",
        },
      ],
    },
    {
      head: "Connect with Us",
      links: [
        {
          text: "YouTube",
          link: "https://www.youtube.com/lntrealtyofficial",
        },
        {
          text: "Facebook",
          link: "https://www.facebook.com/LnTRealty/",
        },
        {
          text: "Instagram",
          link: "https://www.instagram.com/lntrealty.official?igshid=YmMyMTA2M2Y=",
        },
        {
          text: "LinkedIn",
          link: "https://www.linkedin.com/company/l&t-realty"
        },
      ],
    },
  ];

  return (
    <Box w="100%" bg="#26231b" p={5} px={5}>
      <Flex justify="space-around" wrap='wrap'>
        {links.map((l) => (
          <Box key={l.head} px={10} py={5}>
            <Heading color="yellow.400" fontSize="1rem" fontWeight="semibold">
              {l.head}
            </Heading>
            <VStack mt={2} alignItems="start">
              {l.links.map((ll) => (
                <Link
                  href={ll.link}
                  color="white"
                  fontSize="0.9rem"
                  key={ll.link}
                >
                  {ll.text}
                </Link>
              ))}
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Footer;
