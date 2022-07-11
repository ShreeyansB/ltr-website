import {
  Box,
  Button,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Leads = (props) => {
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const { isOpen, onToggle, onClose } = useDisclosure();
  const svgURL =
    "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/solid/eye.svg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const data = {
      email: e.target[2].value.trim(),
      name: e.target[0].value.trim(),
      phone: e.target[1].value.trim(),
    };

    const headers = {
      "cache-control": "no-cache",
      "x-apikey": "62bd6bc0e91195203e3aa742",
      "content-type": "application/json",
    };

    axios
      .post("https://leads-ced0.restdb.io/rest/leads", data, {
        headers: headers,
      })
      .then(function (response) {
        setisLoading(false);
        onToggle();
        // navigate("/walk.html");
        window.open("/walk.html", "_blank");
      })
      .catch(function (error) {
        console.log(error);
        setisLoading(false);
        onToggle();
        toast({
          title: "Error",
          description: "Unable to contact the server.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Popover
      closeOnBlur={false}
      closeOnEsc={false}
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button
          position="fixed"
          bottom="30px"
          right="30px"
          colorScheme="yellow"
          borderRadius="2xl"
          zIndex={3}
          shadow="lg"
          onClick={onToggle}
        >
          <Tooltip label="View Virtual Walkthrough" borderRadius="lg">
            <Image src={svgURL} w="22px" mx={3} my={2} />
          </Tooltip>
        </Button>
      </PopoverTrigger>

      <PopoverContent shadow="xl" mx={5}>
        <PopoverArrow />
        <PopoverCloseButton isDisabled={isLoading} />
        <PopoverHeader fontWeight="semibold">Submit to Continue</PopoverHeader>
        <PopoverBody>
          <form id="form1" onSubmit={handleSubmit}>
            <VStack align="start" spacing={5}>
              <Box>
                <Text>Name</Text>
                <Input
                  isRequired
                  placeholder="Full Name"
                  id="cname"
                  name="cname"
                  type="text"
                />
              </Box>
              <Box>
                <Text>Phone No.</Text>
                <Input
                  isRequired
                  placeholder="XXXXXXXXXX"
                  id="pnumber"
                  name="pnumber"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </Box>
              <Box>
                <Text>EMail</Text>
                <Input
                  isRequired
                  placeholder="id@provider.con"
                  id="email"
                  name="email"
                  type="email"
                />
              </Box>
            </VStack>
            <Button
              type="submit"
              htmlFor="form1"
              float="right"
              mt={5}
              colorScheme="facebook"
              size="sm"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Leads;
