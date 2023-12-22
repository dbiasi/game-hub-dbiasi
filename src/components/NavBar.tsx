import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // importing logo from the assets folder
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    // HStack is a chakara ui component used to layout our items horizontaly.
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

// HStack is to render all the elements in a horizontal orientation
