import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import SignupFormMember from "../blocks/SignupFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const RegisterMember = () => {
  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigateToBack } = useNavigation();

  const handleSubmit = () => {
    if (nickname && email && password) {
      console.log(
        `Image: ${image}, Nickname: ${nickname}, Email: ${email}, Password: ${password}`,
      );
    } else {
      alert("Please fill all the fields!");
    }
  };
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

  const firebaseConfig = {
    ReapiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP__projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_aapId,
    measurementId: process.env.REACT_APP_measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="items-cneter flex flex-col justify-center">
      <Header1 buttons={buttonsHeader} />
      <form>
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
      </form>
    </div>
  );
};

export default RegisterMember;
