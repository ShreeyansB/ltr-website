import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  LightMode,
  Link,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    {
      title: "About Us",
      link: "https://www.lntrealty.com/about-us",
    },
    {
      title: "Careers",
      link: "https://www.lntrealty.com/careers",
    },
    {
      title: "Partner",
      link: "https://www.lntrealty.com/partner-with-us",
    },
    {
      title: "News",
      link: "https://www.lntrealty.com/news-blogs",
    },
    {
      title: "Sustainibility",
      link: "https://www.lntrealty.com/csr",
    },
  ];

  const navButtonHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={3}
      px={5}
      w="100%"
      position="absolute"
      justify="space-between"
    >
      <HStack justify="space-between">
        <Link href="/">
          <Image
            src={logo}
            height="3rem"
            style={{ filter: "invert() saturate(0%) contrast(170%)" }}
          />
        </Link>
        <IconButton
          as={TriangleDownIcon}
          color="white"
          p={3}
          variant="ghost"
          display={{ md: "none" }}
          onClick={navButtonHandler}
        />
      </HStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        pt={2}
        display={{ base: isNavOpen ? "block" : "none", md: "block" }}
      >
        {navLinks.map((l) => (
          <Link
            href={l.link}
            key={l.title}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              size="sm"
              variant="ghost"
              fontWeight="medium"
              textShadow="1px 1px 5px #000000cc"
            >
              {l.title}
            </Button>
          </Link>
        ))}
        <Popover>
          <PopoverTrigger>
              <Button
                size="sm"
                variant="solid"
                colorScheme="blue"
                fontWeight="bold"
                width="6rem"
              >
                Contact
              </Button>
          </PopoverTrigger>
          <PopoverContent
            me={5}
            border="none"
            color="white"
            bg="blackAlpha.900"
          >
            <PopoverCloseButton />
            <PopoverHeader
              borderColor="whiteAlpha.200"
              fontWeight="medium"
              fontSize="0.9rem"
            >
              Contact Details
            </PopoverHeader>
            <PopoverBody fontWeight="normal" fontSize="0.83rem">
              Call us at: <Link href="tel:+919902599025">+91 99025 99025</Link>
              <br />
              <br />
              <i>
                Working hours:&nbsp; <code>8:00 AM to 8:00 PM IST</code>
              </i>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </Flex>
  );
};

export default Header;
