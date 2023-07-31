import useAxiosInstance from "./useAxiosInstance";

const profilesGetFollowings = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/profiles/followings/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetFollowers = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/profiles/followings/${memberId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesPostFollow = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      `/profiles/follow/${memberId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// 앞의 memberId는 본인 id, 뒤의 id는 언팔할 사람의 id
const profilesDeleteFollow = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/profiles/follow/from=${memberId}&to=${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowers = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/profiles/followers/cnt/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowings = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/profiles/followings/cnt/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  profilesGetFollowings,
  profilesGetFollowers,
  profilesPostFollow,
  profilesDeleteFollow,
  profilesGetCntFollowers,
  profilesGetCntFollowings,
};
