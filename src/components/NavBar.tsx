import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <ThemeToggleButton />
    </HStack>
  );
};

export default NavBar;
