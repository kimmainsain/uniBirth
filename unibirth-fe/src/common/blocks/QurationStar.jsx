import React from "react";
import Button1 from "../atoms/Button1";
import { useNavigation } from "../../hooks/useNavigation";

const QurationStar = ({ data }) => {
  const { navigateToDetailStar } = useNavigation();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* 이미지 */}
      <div
        className="w-full cursor-pointer"
        onClick={() => navigateToDetailStar(data.starId)}
      >
        <img
          src={data.imageUrl}
          alt="별 이미지"
          className="mb-4 h-auto max-h-96 w-full object-cover"
        />
      </div>

      <div className="mb-2 w-full px-4 text-xl font-bold">{data.title}</div>

      {/* 닉네임, 내용 및 버튼 */}
      <div className="mb-4 flex w-full justify-between px-4">
        <div className="text-gray-300">{data.content}</div>
        <div>
          <div className="mb-2">{data.nickname}</div>
          <Button1
            value="별 보기"
            onClick={() => navigateToDetailStar(data.starId)}
          />
        </div>
      </div>
    </div>
  );
};

export default QurationStar;
