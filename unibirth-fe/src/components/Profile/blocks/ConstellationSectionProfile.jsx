import React, { useState, useEffect } from "react";
import Button1 from "../../../common/atoms/Button1";
// import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";

const ConstellationSectionProfile = () => {
  // const { navigateToListConstellation } = useNavigation();

  const nickname = useRecoilValue(nicknameState);

  const [images, setImages] = useState([]); // 빈 배열로 초기화

  const handlePinClick = async () => {
    const response = await useConstellationApi.constellationsGetPinList(
      nickname,
    );
    console.log(response.resultData);
    setImages([response.resultData]);
  };

  const handleParticipateClick = async () => {
    const response = await useConstellationApi.constellationsGetAttendList(
      nickname,
    );
    console.log(response.resultData);
    setImages([response.resultData]);
  };

  useEffect(() => {
    // 기본 버튼에 따라 초기 데이터 가져오기
    handleParticipateClick();
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
        {images.map((img) => (
          <div key={img.constellationId} className="my-4">
            <img src={img.imageUrl} className="avatar" alt="User Avatar" />
            <div>
              <p>{img.title}</p>
              {/* <button onClick={() => nicknameClick(user.nickname)}>
                프로필 조회하기
              </button> */}
            </div>

            {/* <button
              className="flex h-32 w-48 items-center "
              onClick={navigateToListConstellation}
            >
              {img.title}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstellationSectionProfile;
