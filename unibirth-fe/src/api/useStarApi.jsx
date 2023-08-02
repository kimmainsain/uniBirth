import useAxiosInstance from "./useAxiosInstance";

const starsGetStar = async (starId) => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/stars/${starId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetBrightness = async (starId) => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/stars/brightness/${starId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetStarList = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(`/stars`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPostStar = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/stars/register`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteBrightness = async (starId) => {
  try {
    const response = await useAxiosInstance.authApiClient.delete(
      `/stars/brightness/${starId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPutStar = async (starId) => {
  try {
    const response = await useAxiosInstance.authApiClient.put(
      `/stars/${starId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteStar = async (starId) => {
  try {
    const response = await useAxiosInstance.authApiClient.delete(
      `/stars/${starId}`,
    );
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
