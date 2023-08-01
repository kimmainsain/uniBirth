import useAxiosInstance from "./useAxiosInstance";

const membersGetBoard = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(`/members/board`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetProfiles = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/members/profiles`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostRegister = async (member) => {
  try {
    console.log(member);
    const response = await useAxiosInstance.apiClient.post(
      "/members/register",
      member,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostLogin = async (member) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      "/members/login",
      member,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetDetail = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/members/detail`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutUpdate = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.put(
      `/members/update`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutBoard = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.put(`/members/board`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutProfiles = async (data) => {
  try {
    const response = await useAxiosInstance.authApiClient.put(
      `/members/profiles`,
      data,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersDeleteMember = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.delete(
      `/members/delete`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostCheckNickname = async (nickname) => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/members/check/nickname?nickname=${nickname}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostCheckEmail = async (email) => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/members/check/email?email=${email}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostEmail = async (email) => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/members/email`,
      email,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetPin = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(`/members/pin`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutPin = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.put(`/members/pin`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  membersPostRegister,
  membersGetDetail,
  membersPostLogin,
  membersDeleteMember,
  membersPutUpdate,
  membersPostCheckNickname,
  membersPostCheckEmail,
  membersPostEmail,
  membersGetBoard,
  membersGetProfiles,
  membersPutBoard,
  membersPutProfiles,
  membersGetPin,
  membersPutPin,
};
