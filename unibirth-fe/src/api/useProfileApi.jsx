import useAxiosInstance from "./useAxiosInstance";

const profilesGetFollowings = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/profiles/followings`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetFollowers = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/profiles/followings`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesPostFollow = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.post(
      `/profiles/follow`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// id 빠져야함.
const profilesDeleteFollow = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.delete(
      `/profiles/follow/from=${memberId}&to=${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowers = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/profiles/followers/cnt`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowings = async () => {
  try {
    const response = await useAxiosInstance.authApiClient.get(
      `/profiles/followings/cnt`,
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
