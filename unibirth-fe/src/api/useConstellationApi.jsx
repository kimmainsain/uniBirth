import useAxiosInstance from "./useAxiosInstance";

const constellationsGetPlanet = async (planetId, jwt) => {
  try {
    console.log(planetId, jwt);
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/constellations/list/${planetId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetConstellation = async (constellationId) => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/${constellationId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPin = async (constellationId) => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/pin/${constellationId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetAttendList = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/profiles`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPinList = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/profiles/pins`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsPostConstellation = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/constellations/register`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetDetail = async (constellationId) => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/detail/${constellationId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetTemplateList = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/constellations/templates`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsDeletePin = async (constellationId) => {
  try {
    const response = await useAxiosInstance.authApiClient.delete(
      `/constellations/pin/${constellationId}`,
    );
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
