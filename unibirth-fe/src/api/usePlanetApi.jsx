import useAxiosInstance from "./useAxiosInstance";

const planetsGetPlanetList = async () => {
  try {
    const response = await useAxiosInstance.authApiClient().get(`/planets`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  planetsGetPlanetList,
};
