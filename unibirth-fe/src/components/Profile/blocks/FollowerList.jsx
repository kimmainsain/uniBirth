import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";

const ConstellationSectionProfile = () => {
  const { navigateToModifyProfile, navigateToFollowings, navigateToFollowers } =
    useNavigation();
  return (
    <div className="space-x-4 bg-blue-200">
      <h1>멤버 섹션 프로필 화면입니다.</h1>
      <div className="flex items-start space-x-4">
        <img
          src="https://picsum.photos/200"
          className="h-32 w-32 rounded-full"
          alt="Round image"
        />
        <div>
          <p className="text-lg font-bold">유저 이름</p>
          <p>탄생일: January 1, 1990</p>
          <p>띄운 별: Orion</p>
          <p onClick={navigateToFollowings}>팔로잉: 100</p>
          <p onClick={navigateToFollowers}>팔로워: 200</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 bg-blue-500">
        <Button1
          value="수정"
          className="font-TAEBAEKmilkyway"
          onClick={navigateToModifyProfile}
        />
      </div>
    </div>
  );
};

export default ConstellationSectionProfile;
