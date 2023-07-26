import axios from "axios";

export const URL = "https://unibirth";

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;