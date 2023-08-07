import React, { useState } from "react";
import Button2 from "../atoms/Button2";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../hooks/useNavigation";
import Footer1 from "../blocks/Footer1";
import { BsPinAngle } from "react-icons/bs";
import Button1 from "../atoms/Button1";
import SearchHeader from "../blocks/SearchHeader";
import QurationStar from "../blocks/QurationStar";

const DetailConstellation = () => {
  const { navigateToBack } = useNavigation();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
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
      value: "별자리보기",
    },
    {
      component: Button1,
      value: "찜하기",
      icon: <BsPinAngle />,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-row justify-center space-x-10">
        <SearchHeader
          buttons={buttonsHeader}
          category={category}
          setCategory={setCategory}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>별자리 상세 페이지</p>
        <p>현재 카테고리 {category}</p>
        <p>현재 검색어 {query}</p>
      </div>
      <QurationStar />
      <Footer1 className="z-50" buttons={buttonsFooter} />
    </div>
  );
};

export default DetailConstellation;
