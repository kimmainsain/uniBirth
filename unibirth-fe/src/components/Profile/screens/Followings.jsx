import React, { useState, useEffect } from "react";
import Button2 from "../../../common/atoms/Button2";
import Button4 from "../../../common/atoms/Button4";
import Header2 from "../../../common/blocks/Header2";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigation } from "../../../hooks/useNavigation";
import useProfileApi from "../../../api/useProfileApi";
import { useRecoilState } from "recoil";
import { targetNicknameState } from "../../../recoil/atoms";

const Followings = () => {
  const {
    navigateToMemberProfile,
    navigateToFollowers,
    navigateToDirectMessage,
    navigateToBack,
  } = useNavigation();

  const [targetNickname, setTargetNickname] =
    useRecoilState(targetNicknameState);

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
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
    const response = await useProfileApi.profilesGetFollowings(targetNickname);
    console.log(response.resultData);
    setFollowingList(response.resultData);
  };

  useEffect(() => {
    getFollowingList();
  }, []);

  const nicknameClick = (nick) => {
    setTargetNickname(nick); // 클릭한 유저 닉네임을 targetNicknameState에 저장합니다.
    navigateToMemberProfile(); // 화면 이동을 처리하는 함수를 호출합니다.
  };

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <Header1 buttons={buttonsHeader2} />
      <h1> {targetNickname}의 팔로잉 리스트입니다..</h1>
      <div className="flex flex-col items-center">
        {followingList.map((user) => (
          <div key={user.nickname} className="my-4">
            <img src={user.imageUrl} className="avatar" alt="User Avatar" />
            <div>
              <p>{user.nickname}</p>
              <button onClick={() => nicknameClick(user.nickname)}>
                프로필 조회하기
              </button>
            </div>
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
