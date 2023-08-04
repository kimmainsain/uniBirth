import React from "react";
import tops from "../../assets/images/tops.PNG";
//
const QurationStar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>더미 파일</p>
      <img src={tops} alt="별자리 이미지" />
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">
        별자리 이름
      </p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">설명</p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">행성</p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">총 밝기</p>
    </div>
  );
};

export default QurationStar;
