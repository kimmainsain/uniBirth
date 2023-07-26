import axiosInstance from "./axiosInstance";

const membersRegister = (member) => {
  try {
    const response = axiosInstance.post("/api/members", member);
    console.log(response.data);
    return response.data;
  }
  catch (e) {
    console.log(e);
  }
};

export { membersRegister };