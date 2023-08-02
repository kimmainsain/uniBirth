import useAxiosInstance from "./useAxiosInstance";

const planetsGetPlanetList = async (jwt) => {
  try {
    const response = await useAxiosInstance.authApiClient(jwt).get(`/planets`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  planetsGetPlanetList,
};
