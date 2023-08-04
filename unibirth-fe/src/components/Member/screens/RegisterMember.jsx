import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import SignupFormMember from "../blocks/SignupFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import useMemberApi from "../../../api/useMemberApi";
import earth from "../../../assets/images/earth.png";

const RegisterMember = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const { navigateToBack, navigateToLoginMember } = useNavigation();
  const [image, setImage] = useState(`${earth}`);
  const [content, setContent] = useState(
    "이자식이 무슨 내일이야! 내일은 없다, 오늘밖에",
  );
  const [jodiacname, setJodiacname] = useState("너는 별자리일까?");

  const joinMember = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const member = {
      nickname,
      email,
      password,
    };
    try {
      const response = await useMemberApi.membersPostRegister(member);
      updateimage();
      console.log(response);
      alert("회원가입이 완료되었습니다.");
      navigateToLoginMember();
    } catch (e) {
      console.log(e);
      alert("회원가입에 실패하였습니다.");
    }

    console.log(
      `Nickname: ${nickname}, Email: ${email}, Password: ${password}, confirmPassword: ${confirmPassword}`,
    );
  };

  const updateimage = () => {
    const [year, month, day] = birthdate.split("-");
    console.log(year);
    const birthdateAsNumber = parseInt(month + day, 10);
    console.log(`Birthdate as number: ${birthdateAsNumber}`);
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
      onClick: joinMember,
    },
  ];

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
      <Header1 buttons={buttonsHeader} />
      <form>
        <SignupFormMember
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          birthdate={birthdate}
          setBirthdate={setBirthdate}
          image={image}
          setImage={setImage}
          content={content}
          setContent={setContent}
          jodiacname={jodiacname}
          setJodiacname={setJodiacname}
        />
        <Footer1
          buttons={buttonsFooter}
          nickname={nickname}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          joinMember={joinMember}
        />
      </form>
    </div>
  );
};

export default RegisterMember;
