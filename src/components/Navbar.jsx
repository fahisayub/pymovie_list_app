import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex p="10px" bg={"facebook.500"} color={"white"}>
      <Heading size={"md"}>Movies List</Heading>
    </Flex>
  );
};

export default Navbar;
