import useAxiosInstance from "./useAxiosInstance";

const starsGetStar = async (starId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/stars/${starId}/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetBrightness = async (starId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/stars/brightness/${starId}/${memberId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsGetStarList = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(`/stars/${memberId}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPostStar = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      `/stars/register/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteBrightness = async (starId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/stars/brightness/${starId}/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsPutStar = async (starId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.put(
      `/stars/${starId}/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const starsDeleteStar = async (starId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/stars/${starId}/${memberId}`,
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
