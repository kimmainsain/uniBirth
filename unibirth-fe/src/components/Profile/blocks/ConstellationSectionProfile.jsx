import React, { useState, useEffect } from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";

const ConstellationSectionProfile = () => {
  const { navigateToListConstellation } = useNavigation();
  const nickname = useRecoilValue(nicknameState);

  const [images, setImages] = useState({
    images: [],
  });

  const handlePinClick = async () => {
    const response = await useConstellationApi.constellationsGetPinList(
      nickname,
    );
    setImages(response.resultData);
  };

  const handleParticipateClick = async () => {
    const response = await useConstellationApi.constellationsGetAttendList(
      nickname,
    );
    console.log(response);
    setImages(response.resultData);
  };

  useEffect(() => {
    // 기본 버튼에 따라 초기 데이터 가져오기
    handleParticipateClick();
    console.log(nickname);
  }, []);

  return (
    <div className="space-x-4 bg-red-200">
      <h1>별자리 섹션 프로필 화면입니다. </h1>
      <div className="flex flex-row items-center justify-center space-x-4 bg-red-500">
        <Button1
          value="참여한 별자리"
          className="font-TAEBAEKmilkyway"
          onClick={handleParticipateClick}
        />
        <Button1
          value="핀한 별자리"
          className="font-TAEBAEKmilkyway"
          onClick={handlePinClick}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center bg-red-400">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`profile-${index}`}
            onClick={navigateToListConstellation}
            className="m-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ConstellationSectionProfile;
