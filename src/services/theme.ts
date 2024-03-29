/*In summary, this snippet is creating a custom theme configuration for a React 
application using Chakra UI. It sets the default color mode to dark and then extends 
the default Chakra UI theme with this configuration. Finally, the customized theme 
is exported for use throughout the application. */

// Importing functions and types from Chakra UI
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Define the theme configuration with TypeScript type annotation
const config: ThemeConfig = {
  // Set the initial color mode for the theme (dark mode in this case)
  initialColorMode: "dark",
};

// Use extendTheme to customize the default Chakra UI theme
// by passing our configuration object
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

// Export the customized theme as the default export of this module
// This theme can be used to provide theming context to your React application
export default theme;
