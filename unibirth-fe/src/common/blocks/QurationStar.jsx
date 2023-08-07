import React, { useEffect, useState } from "react";
import tops from "../../assets/images/tops.PNG";
import useSearchApi from "../../api/useSearchApi";
import { nicknameState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

const QurationStar = () => {
  const [qurationStar, setQurationStar] = useState({
    qurationStar: [],
  });
  const nickname = useRecoilValue(nicknameState);

  const getQurationStar = async () => {
    try {
      const response = await useSearchApi.searchGetMemberCuration(nickname);
      if (response.status === 200) {
        console.log("파일을 불러왔습니다.", response.resultData);
        setQurationStar(response.resultData);
      } else {
        alert("파일을 불러오는데 실패하였습니다.");
      }
    } catch (e) {
      console.log(e);
      alert("파일을 불러오는데 실패하였습니다.");
    }
  };

  useEffect(() => {
    getQurationStar();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>더미 파일</p>
      <img src={tops} alt="별자리 이미지" />
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">
        현재 starId : {qurationStar.starId}
      </p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">
        현재 writer : {qurationStar.writer}
      </p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">
        현재 imageUrl : {qurationStar.imageUrl}
      </p>
      <p className="my-4 flex justify-center font-TAEBAEKmilkyway">
        현재 content : {qurationStar.content}
      </p>
    </div>
  );
};

export default QurationStar;
