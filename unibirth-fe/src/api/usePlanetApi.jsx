import useAxiosInstance from "./useAxiosInstance";

const planetsGetPlanetList = async () => {
  try {
    // const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance.apiClient.get(`/planets`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  planetsGetPlanetList,
};
