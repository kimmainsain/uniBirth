import useAxiosInstance from "./useAxiosInstance";

const searchGetMemberCuration = async (nickname) => {
  const jwt = sessionStorage.getItem("accessToken");
  console.log(nickname);
  try {
    const response = await useAxiosInstance
      .authApiClient(jwt)
      .get(`/member/curation`, nickname);
    return response.data;
  } catch (e) {
    console.log(e);
  }
  return searchGetMemberCuration;
};

const searchGetSearch = (category, word) => {
  const jwt = sessionStorage.getItem("accessToken");
  console.log(category, word);
  try {
    const response = useAxiosInstance
      .authApiClient(jwt)
      .get(`/search?category=${category}&word=${word}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  searchGetMemberCuration,
  searchGetSearch,
};
