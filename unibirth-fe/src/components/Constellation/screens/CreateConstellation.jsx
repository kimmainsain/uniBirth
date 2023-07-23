import React from "react";
import CreateFooterConstellation from "../blocks/CreateFooterConstellation";
import CreateHeaderConstellation from "../blocks/CreateHeaderConstellation";

const CreateConstellation = () => {
  return (
    <div>
      <CreateHeaderConstellation />
      <h1>별자리 생성 화면입니다.</h1>
      <CreateFooterConstellation />
    </div>
  );
};

export default CreateConstellation;
