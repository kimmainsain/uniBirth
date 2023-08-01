import React, { useState } from "react";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { useNavigation } from "../../../hooks/useNavigation";
import { BiSearch } from "react-icons/bi";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Inputimage from "../../Member/atoms/InputImage";
import InputBox from "../../../common/atoms/InputBox";
import useMemberApi from "../../../api/useMemberApi";

const ModifyProfile = () => {
  const { navigateToBack, navigateToMemberProfile } = useNavigation();
  const [image, setImage] = useState("");
  const [introduction, setIntroduction] = useState("");

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const handleClick = async (e) => {
    e.preventDefault();
    const member = {
      image,
      introduction,
    };
    const memberId = sessionStorage.getItem("id");
    console.log("image:", image);
    console.log("introduction:", introduction);
    try {
      const response = await useMemberApi.membersPutProfiles(memberId, member);
      if (response.status === 200) {
        alert("수정이 완료되었습니다.");
        console.log(response.resultdata);
        navigateToMemberProfile();
      } else {
        console.log(response.resultdata);
        alert("오류 발생.");
      }
    } catch (e) {
      console.log(e);
      alert("오류가 발생.");
    }
  };

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "완료하기",
      onClick: handleClick,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <Header1 buttons={buttonsHeader} />
      <form className="flex flex-col items-center justify-center space-y-10">
        <Inputimage value={image} onChange={(e) => setImage(e.target.value)} />
        <InputBox
          value="자기소개"
          onChange={(e) => setIntroduction(e.target.value)}
        />
        <Footer1 buttons={buttonsFooter} />
      </form>
    </div>
  );
};

export default ModifyProfile;
