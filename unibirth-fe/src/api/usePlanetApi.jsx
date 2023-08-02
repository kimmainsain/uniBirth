import useAxiosInstance from "./useAxiosInstance";

const planetsGetPlanetList = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance.authApiClient(jwt).get(`/planets`);
    console.log("response는", response);
    console.log("token은", jwt);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  planetsGetPlanetList,
};
