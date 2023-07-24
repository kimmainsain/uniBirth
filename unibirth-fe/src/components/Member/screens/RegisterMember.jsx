import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import SignupFormMember from "../blocks/SignupFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";

const RegisterMember = () => {
  // 1. image, nickname, email, password, password check
  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (nickname && email && password) {
      // submit logic here
      console.log(
        `Image: ${image}, Nickname: ${nickname}, Email: ${email}, Password: ${password}`,
      );
    } else {
      alert("Please fill all the fields!");
    }
  };
  // 이미지를 firebase에서 저장한 후 URL 값을 받아와서 백엔드에 보내기
  const { navigateToBack } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiArrowBack />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원가입",
      onClick: handleSubmit,
    },
  ];

  // 2. image, nickname, email, password  부모에게 넘겨주기
  return (
    <div className="items-cneter flex flex-col justify-center">
      <Header1 buttons={buttonsHeader} />
      <SignupFormMember
        image={image}
        setImage={setImage}
        nickname={nickname}
        setNickname={setNickname}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Footer1
        buttons={buttonsFooter}
        image={image}
        nickname={nickname}
        email={email}
        password={password}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterMember;
