import React, { useState, useEffect } from "react";
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
  const [intro, setIntro] = useState("");

  const memberId = sessionStorage.getItem("id");
  const { imageUrl, introduction } = useMemberApi.membersGetDetail(memberId);

  // useEffect를 사용하여 데이터가 불러와진 후에 상태를 설정합니다.
  useEffect(() => {
    setImage(imageUrl);
    setIntro(introduction);
  }, [imageUrl, introduction]);

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
      imageUrl: image,
      introduction: intro,
    };
    console.log("image:", image);
    console.log("intro:", intro);
    try {
      const response = await useMemberApi.membersPutProfiles(memberId, member);
      if (response.status === 200) {
        alert("수정이 완료되었습니다.");
        navigateToMemberProfile();
      } else {
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
          value="자기소개 : "
          onChange={(e) => setIntro(e.target.value)}
        />
        <Footer1 buttons={buttonsFooter} />
      </form>
    </div>
  );
};

export default ModifyProfile;
