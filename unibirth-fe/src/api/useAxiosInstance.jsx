import axios from "axios";

export const URL = "https://unibirth";

const useAxiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default useAxiosInstance;
