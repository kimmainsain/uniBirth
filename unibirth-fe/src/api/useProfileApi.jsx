import useAxiosInstance from "./useAxiosInstance";

const profilesGetFollowings = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/profiles/followings?nickname=${nickname}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetFollowers = async (nickname) => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/profiles/followers?nickname=${nickname}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesPostFollow = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .post(`/profiles/follow`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// id 빠져야함.
const profilesDeleteFollow = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .delete(`/profiles/follow/from=&to=`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowers = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/profiles/followers/cnt`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const profilesGetCntFollowings = async () => {
  try {
    const jwt = sessionStorage.getItem("accessToken");
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/profiles/followings/cnt`);
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
