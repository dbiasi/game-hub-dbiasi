import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./services/theme.ts"; // importing the theme
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* seting the theme to the theme object from theme.ts */}
    <ChakraProvider theme={theme}>
      {/* we need to use ColorModeScript from react too */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// theme is used to difine if is dark mode or light mode
// to gain access to this function you need to wrap the App component with <ColorModeScript>
