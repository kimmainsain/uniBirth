import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import GridCustomConstellation from "../blocks/GridCustomConstellation";

const DrawingConstellation = () => {
  const { navigateToBack } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const handleSubmit = () => {
    // 별자리가 유효한지 판단
    const flag = true;

    if (flag === true) {
      alert(
        "지금 flag는 true입니다. 별도의 case 조작이 필요합니다. 별자리가 유효합니다.",
      );
      // 별자리 디테일 페이지로 이동
      // axios 요청을 보내서 /constellations/register/{member_id}
    }
  };

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "초기화",
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "완료하기",
      onClick: handleSubmit,
    },
  ];
  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <p className="lg-10 my-5 flex justify-center font-TAEBAEKmilkyway text-4xl">
        별자리 그리기 예시입니다.
      </p>
      <GridCustomConstellation />
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default DrawingConstellation;
