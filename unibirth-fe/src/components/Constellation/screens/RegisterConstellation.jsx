import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import InputDropdown from "../atoms/InputDropdown";
import InputStella from "../atoms/InputStella";
import InputDescription from "../atoms/InputDescription";
import planet1 from "../../../assets/images/planet1.png";

const RegistConstellation = () => {
  const [planetname, setPlanetname] = useState("행성 1");
  const [stellaname, setStellaname] = useState("");
  const [stelladescp, setStelladescp] = useState("");

  const handleSubmit = () => {
    // 여기에 중복이 있는 지 확인하는 로직 필요함

    // 여기서 오류가 없다면
    if (planetname && stellaname && stelladescp) {
      console.log("행성명: ", planetname);
      console.log("별자리명: ", stellaname);
      console.log("별자리설명: ", stelladescp);
      navigateToDrawingConstellation();
    } else if (stellaname) {
      alert("별자리를 설명해주세요 ! ");
    } else {
      alert("별자리를 입력해주세요 ! ");
    }
  };
  // navigateToDrawingConstellation
  const { navigateToBack, navigateToDrawingConstellation } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리 그리기",
      onClick: handleSubmit,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-10 py-10">
      <Header1 buttons={buttonsHeader} />
      <div className="flex flex-col items-center justify-center space-y-5">
        <img
          src={planet1}
          alt="행성1 이미지 예시"
          className="flex items-center justify-center"
        />
        <p className="font-TAEBAEKmilkyway">행성 명</p>
        <InputDropdown planetname={planetname} setPlanetname={setPlanetname} />
        <p className="font-TAEBAEKmilkyway">별자리 명</p>
        <InputStella stellaname={stellaname} setStellaname={setStellaname} />
        <p className="font-TAEBAEKmilkyway">별자리 설명</p>
        <InputDescription
          stelladescp={stelladescp}
          setStelladescp={setStelladescp}
        />
      </div>
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default RegistConstellation;
