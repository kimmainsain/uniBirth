import useAxiosInstance from "./useAxiosInstance";

const constellationsGetPlanet = async (planetId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/list/${planetId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetConstellation = async (constellationId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/${constellationId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPin = async (constellationId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/pin/${constellationId}/${memberId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationGetAttendList = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/profiles/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationGetPinList = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/profiles/pins/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationPostConstellation = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      `/constellations/register/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationGetDetail = async (constellationId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/detail/${constellationId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationGetTemplateList = async () => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/templates`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationDeletePin = async (constellationId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/constellations/pin/${constellationId}/${memberId}`,
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
  constellationGetAttendList,
  constellationGetPinList,
  constellationPostConstellation,
  constellationGetDetail,
  constellationGetTemplateList,
  constellationDeletePin,
};
