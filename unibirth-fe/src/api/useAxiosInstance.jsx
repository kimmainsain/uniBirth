import axios from "axios";
import { API_URL, CONTENT_TYPE_JSON } from "../constants/constants";

const token = sessionStorage.getItem("accessToken");

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

const authApiClient = () =>
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": CONTENT_TYPE_JSON,
      Authorization: `Bearer ${token}`,
    },
  });

export default { apiClient, authApiClient };
