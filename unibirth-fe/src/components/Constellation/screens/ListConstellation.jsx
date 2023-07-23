import React from "react";
import ListFooterConstellation from "../blocks/ListFooterConstellation";
import ListHeaderConstellation from "../blocks/ListHeaderConstellation";

const ListConstellaion = () => {
  return (
    <div>
      <ListHeaderConstellation />
      <h1>별자리 리스트 화면입니다.</h1>
      <ListFooterConstellation />
    </div>
  );
};

export default ListConstellaion;
