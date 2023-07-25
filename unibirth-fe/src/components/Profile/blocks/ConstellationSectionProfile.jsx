import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";

const ConstellationSectionProfile = () => {
  const { navigateToListConstellation } = useNavigation();

  const originalImages = Array(10).fill("https://picsum.photos/200");
  const newImages = Array(10).fill("https://picsum.photos/200/200");

  const [images, setImages] = useState(originalImages);

  const handlePinClick = () => {
    setImages(newImages);
  };

  const handleParticipateClick = () => {
    setImages(originalImages);
  };

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
