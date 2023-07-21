import React from "react";
import { BackButton } from "../../atoms/Atoms";

const Header = () => {
  return (
    <div className="flex flex-row items-center ">
      <BackButton />
      <p> 회원가입</p>
    </div>
  );
};

export default Header;
