import React, { useState, useEffect } from "react";
import Button2 from "../../../common/atoms/Button2";
import Button4 from "../../../common/atoms/Button4";
import Header2 from "../../../common/blocks/Header2";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigation } from "../../../hooks/useNavigation";
import useProfileApi from "../../../api/useProfileApi";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";

const Followers = () => {
  const {
    navigateToMemberProfile,
    navigateToFollowings,
    navigateToDirectMessage,
  } = useNavigation();

  const nickname = useRecoilValue(nicknameState);

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToMemberProfile,
      icon: <IoIosArrowBack />,
    },
  ];

  const buttonsHeader2 = [
    {
      component: Button4,
      className: "font-TAEBAEKmilkyway bg-white",
      value: "팔로잉",
      onClick: navigateToFollowings,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로워",
    },
  ];

  const [followerList, setFollowerList] = useState([]);

  const getFollowerList = async () => {
    const response = await useProfileApi.profilesGetFollowers(nickname);
    setFollowerList(response.resultData);
  };

  useEffect(() => {
    getFollowerList();
  }, []);

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <Header1 buttons={buttonsHeader2} />
      <h1> 팔로워 리스트입니다..</h1>
      <div className="flex flex-col items-center">
        {followerList.map((user) => (
          <div key={user.nickname} className="my-4">
            <img src={user.imageUrl} className="avatar" alt="User Avatar" />
            <p>{user.nickname}</p>
            <button
              className="flex h-32 w-48 items-center "
              onClick={navigateToDirectMessage}
            >
              <CiLocationArrow1 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
