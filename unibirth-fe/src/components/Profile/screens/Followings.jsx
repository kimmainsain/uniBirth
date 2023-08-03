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

const Followings = () => {
  const {
    navigateToMemberProfile,
    navigateToFollowers,
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
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로잉",
    },
    {
      component: Button4,
      className: "font-TAEBAEKmilkyway",
      onClick: navigateToFollowers,
      value: "팔로워",
    },
  ];
  const [followingList, setFollowingList] = useState([]);

  const getFollowingList = async () => {
    const response = await useProfileApi.profilesGetFollowings(nickname);
    setFollowingList(response.resultData);
  };

  useEffect(() => {
    getFollowingList();
  }, []);

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <Header1 buttons={buttonsHeader2} />

      <div className="flex flex-col items-center">
        {followingList.map((user) => (
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

export default Followings;
