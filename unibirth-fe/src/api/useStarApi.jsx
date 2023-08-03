import useAxiosInstance from "./useAxiosInstance";

const starsGetStar = async (starId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/stars/${starId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetBrightness = async (starId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/stars/brightness/${starId}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetStarList = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/stars?nickname=${nickname}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPostStar = async (data) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .post(`/stars/register`, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteBrightness = async (starId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .delete(`/stars/brightness/${starId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPutStar = async (starId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .put(`/stars/${starId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteStar = async (starId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .delete(`/stars/${starId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  starsGetStar,
  starsGetBrightness,
  starsGetStarList,
  starsPostStar,
  starsDeleteBrightness,
  starsPutStar,
  starsDeleteStar,
};
