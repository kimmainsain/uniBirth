import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header2 from "../../../common/blocks/Header2";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigation } from "../../../hooks/useNavigation";

const MessageUserList = () => {
  const { navigateToDirectMessage } = useNavigation();

  const users = [
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
  ];

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <h1>메시지 박스입니다..</h1>
      {users.map((user) => (
        <div key={user.id} className="flex items-start space-x-4">
          <img
            src={user.profileImageUrl}
            className="h-32 w-32 rounded-full"
            alt="Round image"
          />
          <div className="flex h-32 items-center">
            <p className="text-lg font-bold ">{user.name}</p>
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
  );
};

export default MessageUserList;
