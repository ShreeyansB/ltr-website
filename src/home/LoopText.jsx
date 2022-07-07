import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const LoopText = (props) => {
  const text = [
    "you can call your own",
    "make India proud",
    "the world looks up to",
    "make life brighter",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 6000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Heading {...props}>
      <TextTransition springConfig={presets.gentle}>
        {text[index % text.length]}
      </TextTransition>
    </Heading>
  );
};

export default LoopText;
