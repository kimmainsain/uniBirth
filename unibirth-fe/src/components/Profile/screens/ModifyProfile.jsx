import React, { useState } from "react";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { useNavigation } from "../../../hooks/useNavigation";
import { BiSearch } from "react-icons/bi";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Inputimage from "../../Member/atoms/InputImage";
import Inputnickname from "../../Member/atoms/Inputnickname";
import InputPassword from "../../../common/atoms/InputPassword";
import InputPasswordConfirm from "../../Member/atoms/InputPasswordConfirm";

const ModifyProfile = () => {
  const { navigateToBack } = useNavigation();
  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const handleClick = () => {
    console.log("image:", image);
    console.log("nickname:", nickname);
    console.log("password:", password);

    // 유효하다고 판단하면 마이페이지 화면으로 넘기기
  };

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "완료하기",
      onClick: handleClick,
    },
  ];

  // password와 passwordConfirm 로직을 수행하는 함수 작성해야 함

  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <form action="">
        <Inputimage value={image} onChange={(e) => setImage(e.target.value)} />
        <Inputnickname
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <InputPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputPasswordConfirm />
        <Footer1 buttons={buttonsFooter} />
      </form>
    </div>
  );
};

export default ModifyProfile;
