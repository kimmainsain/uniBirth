import useAxiosInstance from "./useAxiosInstance";

const membersPostRegister = async (member) => {
  try {
    console.log(member);
    const response = await useAxiosInstance.post("/members", member);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersGetDetail = async (id) => {
  try {
    const response = await useAxiosInstance.get(`/members/detail/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersPostLogin = async (member) => {
  try {
    const response = await useAxiosInstance.post("/members/login", member);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const membersDeleteDelete = async (id) => {
  try {
    const response = await useAxiosInstance.delete(`/members/delete/${id}`);
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
};
