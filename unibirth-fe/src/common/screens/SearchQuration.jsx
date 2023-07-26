import React, { useState, useRef, useEffect } from "react";
import Button2 from "../atoms/Button2";
import Header1 from "../blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../hooks/useNavigation";
import Footer1 from "../blocks/Footer1";
import { BsPinAngle } from "react-icons/bs";
import Button1 from "../atoms/Button1";
import Header3 from "../blocks/Header3";
import QurationStar from "../blocks/QurationStar";

const DetailConstellation = () => {
  const { navigateToBack, navigateToStar } = useNavigation();
  const [qurationStars, setQurationStars] = useState([]);
  const loader = useRef(null);

  useEffect(() => {
    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setQurationStars((prev) => [
          ...prev,
          <QurationStar key={prev.length} />,
        ]);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setQurationStars((prev) => [...prev, <QurationStar key={prev.length} />]);
    }
  }, []);

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
      onClick: navigateToStar,
    },
    {
      component: Button1,
      value: "찜하기",
      onClick: navigateToStar,
      icon: <BsPinAngle />,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-row justify-center space-x-10">
        <Header1 buttons={buttonsHeader} />
        <Header3 />
      </div>
      <div
        style={{
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          height: "90vh",
          scrollBehavior: "smooth",
        }}
      >
        {qurationStars.map((star, index) => (
          <div style={{ scrollSnapAlign: "start", height: "90vh" }} key={index}>
            {star}
          </div>
        ))}
        <div className="loading" ref={loader}>
          <p className="font-TAEBAEKmilkyway text-2xl">Load More...</p>
        </div>
      </div>
      <Footer1 className="z-50" buttons={buttonsFooter} />
    </div>
  );
};

export default DetailConstellation;
