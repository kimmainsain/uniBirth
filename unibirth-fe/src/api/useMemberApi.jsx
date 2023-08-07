import useAxiosInstance from "./useAxiosInstance";

const membersGetBoard = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/members/board`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// memberId 빼면 get요청에서 숫자 빼줘야함
const membersGetProfiles = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/members/profiles/read`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostRegister = async (member) => {
  try {
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

const membersGetDetail = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/members/detail/${nickname}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutUpdate = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .put(`/members/update`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutBoard = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .put(`/members/board`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutProfiles = async (data) => {
  try {
    console.log(data);
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .put(`/members/profiles/update`, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersDeleteMember = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .delete(`/members/delete`);
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
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/members/pin`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPutPin = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .put(`/members/pin`);
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
