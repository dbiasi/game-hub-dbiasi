// ThemeToggleButton.tsx
import { useColorMode, Button } from "@chakra-ui/react";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Switch to {colorMode === "light" ? "dark" : "light"} mode
    </Button>
  );
};

export default ThemeToggleButton;
