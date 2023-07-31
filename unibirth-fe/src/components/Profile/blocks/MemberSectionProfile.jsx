import React, { useState, useEffect } from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";
import useMemberApi from "../../../api/useMemberApi";
const ConstellationSectionProfile = () => {
  const { navigateToModifyProfile, navigateToFollowings, navigateToFollowers } =
    useNavigation();

  const memberId = sessionStorage.getItem("memberId");
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const data = await useMemberApi.membersGetDetail(`${memberId}`);
        console.log(memberId);
        setMemberData(data);
      } catch (error) {
        console.error("멤버 데이터를 가져오는데 에러 발생:", error);
      }
    };
    fetchMemberData();
  }, [memberId]);

  return (
    <div className="space-x-4 bg-blue-200">
      <h1>멤버 데이터는 여기</h1>
      {memberData && (
        <div className="flex items-start space-x-4">
          <img
            src="https://picsum.photos/200"
            className="h-32 w-32 rounded-full"
            alt="Round image"
          />
          <div>
            <p className="text-lg font-bold">유저 이름</p>
            <p>탄생일: {memberData.birthDate}</p>
            <p>띄운 별: {memberData.starsCount}</p>
            <p onClick={navigateToFollowings}>
              팔로잉: {memberData.followingsCount}
            </p>
            <p onClick={navigateToFollowers}>
              팔로워: {memberData.followersCount}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">{memberData.introduction}</p>
          </div>
        </div>
      )}

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
