import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Button3 from "../../../common/atoms/Button3";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigation } from "../../../hooks/useNavigation";
import MemberSectionProfile from "../blocks/MemberSectionProfile";
import ConstellationSectionProfile from "../blocks/ConstellationSectionProfile";
import useMemberApi from "../../../api/useMemberApi";

const MemberProfile = () => {
  const {
    navigateToMessageBox,
    navigateToModifyProfile,
    navigateToMainPlanet,
    navigateToModifyMember,
  } = useNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    navigateToMainPlanet();
  };

  const handleSignout = async () => {
    const confirmSignOut = window.confirm("정말로 회원을 탈퇴하시겠습니까?");
    if (confirmSignOut) {
      try {
        const response = await useMemberApi.membersDeleteMember();
        if (response.status === 200) {
          alert("회원탈퇴 완료.");
          sessionStorage.clear();
          navigateToMainPlanet();
        } else {
          alert("죽어도 못 보내~");
        }
      } catch (e) {
        console.log(e);
        alert("내가 어떻게 널 보내~");
      }
    }
  };

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToMainPlanet,
      icon: <IoIosArrowBack />,
    },
    {
      component: Button3,
      className: "font-TAEBAEKmilkyway",
      value: "사용자의 프로필",
      onClick: navigateToModifyProfile,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      onClick: navigateToMessageBox,
      icon: <LuMessagesSquare />,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      onClick: () => setIsModalOpen(true),
      icon: <IoMdMenu />,
    },
  ];

  const modalButtons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원정보 수정",
      onClick: navigateToModifyMember,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그아웃",
      onClick: handleLogout,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원 탈퇴",
      onClick: handleSignout,
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <h1>회원 프로필 화면입니다.</h1>
      <MemberSectionProfile />
      <ConstellationSectionProfile />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="z-10 rounded bg-white p-4 shadow-md">
            <Header1 buttons={modalButtons} />
            <div className="mt-4 flex justify-center">
              <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={handleCloseModal}
              >
                창 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberProfile;
