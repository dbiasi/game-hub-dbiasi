import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c060fb55d38b47c8aeb3d89c5f12cfcb",
  },
});
