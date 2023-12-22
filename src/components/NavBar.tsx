import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // importing logo from the assets folder
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // HStack is a chakara ui component used to layout our items horizontaly.
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

// HStack is to render all the elements in a horizontal orientation
