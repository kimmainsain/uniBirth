import useAxiosInstance from "./useAxiosInstance";

const constellationsGetPlanet = async (planetId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/list/${planetId}`);
    console.log("api입니다", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetConstellation = async (constellationId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/${constellationId}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPin = async (constellationId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/pin/${constellationId}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetAttendList = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/profiles?nickname=${nickname}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPinList = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/profiles/pins?nickname=${nickname}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsPostConstellation = async (constellation) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .post(`/constellations/register`, constellation);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetDetail = async (constellationId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/detail/${constellationId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetTemplateList = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/templates`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsDeletePin = async (constellationId) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .delete(`/constellations/pin/${constellationId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  constellationsGetPlanet,
  constellationsGetConstellation,
  constellationsGetPin,
  constellationsGetAttendList,
  constellationsGetPinList,
  constellationsPostConstellation,
  constellationsGetDetail,
  constellationsGetTemplateList,
  constellationsDeletePin,
};
