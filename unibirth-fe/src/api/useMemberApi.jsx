import useAxiosInstance from "./useAxiosInstance";

const membersGetBoard = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/board/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetProfiles = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/profiles/${memberId}`,
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

const membersGetDetail = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/detail/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutUpdate = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.put(
      `/members/update/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutBoard = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.put(
      `/members/board/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutProfiles = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.put(
      `/members/profiles/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersDeleteDelete = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/members/delete/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetCheckNickname = async (nickname) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/check/${nickname}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetCheckEmail = async (email) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/checkemail/${email}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostEmail = async (email) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      `/members/email`,
      email,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetPin = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/members/pin/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutPin = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.put(
      `/members/pin/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  membersPostRegister,
  membersGetDetail,
  membersPostLogin,
  membersDeleteDelete,
  membersPutUpdate,
  membersGetCheckNickname,
  membersGetCheckEmail,
  membersPostEmail,
  membersGetBoard,
  membersGetProfiles,
  membersPutBoard,
  membersPutProfiles,
  membersGetPin,
  membersPutPin,
};
