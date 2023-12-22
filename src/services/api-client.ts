// Creating a dedicated file to configure and export a pre-configured Axios instance

// Importing the Axios library
import axios from "axios";

// Exporting a pre-configured instance of Axios
export default axios.create({
  // Setting the base URL for all requests made using this instance
  // This means you don't have to repeat this URL part in each request
  baseURL: "https://api.rawg.io/api",

  // Setting default query parameters that will be sent with every request
  // In this case, it's an API key required for accessing the API
  params: {
    key: "c060fb55d38b47c8aeb3d89c5f12cfcb",
  },
});
