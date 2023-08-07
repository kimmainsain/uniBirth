import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSearchApi from "../../api/useSearchApi";

function SearchCommon() {
  const location = useLocation();
  const query = location.state.query;
  const category = location.state.categoryName;
  const [constellationList, setConstellationList] = useState({
    constellationList: [],
  });
  const [memberList, setMemberList] = useState({
    memberList: [],
  });
  const [starList, setStarList] = useState({
    starList: [],
  });

  const getSeartchGetSearch = async () => {
    try {
      const response = await useSearchApi.searchGetSearch(category, query);
      if (response.status === 200) {
        console.log("파일을 불러왔습니다.", response.resultData);
        setConstellationList(response.resultData.constellationList);
        setMemberList(response.resultData.memberList);
        setStarList(response.resultData.starList);
      } else {
        alert("파일을 불러오는데 실패하였습니다.");
      }
    } catch (e) {
      console.log(e);
      alert("파일을 불러오는데 실패하였습니다.");
    }
  };

  useEffect(() => {
    getSeartchGetSearch();
  }, []);

  return (
    <div>
      <p>검색어: {query}</p>
      <p>카테고리: {category}</p>
      <p>별자리 리스트</p>
      {constellationList &&
        constellationList.map((constellation) => (
          <div key={constellation.id}>
            <p>별자리 이름: {constellation.name}</p>
            <p>별자리 설명: {constellation.description}</p>
          </div>
        ))}
      <p>멤버 리스트</p>
      {memberList &&
        memberList.map((member) => (
          <div key={member.id}>
            <p>멤버 닉네임: {member.nickname}</p>
            <p>멤버 소개: {member.introduction}</p>
          </div>
        ))}
      <p>스타 리스트</p>
      {starList &&
        starList.map((star) => (
          <div key={star.id}>
            <p>스타 이름: {star.name}</p>
            <p>스타 설명: {star.description}</p>
          </div>
        ))}
    </div>
  );
}

export default SearchCommon;
