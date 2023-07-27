import axios from "axios";

export const URL = "http://3.35.135.57:8080";

const useAxiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default useAxiosInstance;
