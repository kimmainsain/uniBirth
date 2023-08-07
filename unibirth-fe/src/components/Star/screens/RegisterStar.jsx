import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import BodyRegisterStar from "../blocks/BodyRegisterStar";
import { useRecoilValue } from "recoil";
import { StellaIdState } from "../../../recoil/atoms";
import useStarApi from "../../../api/useStarApi";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../api/useFirebaseApi";

const RegisterStar = (event) => {
  const { navigateToBack } = useNavigation(); // navigateToDetailConstellation
  console.log(event);
  const constellationId = useRecoilValue(StellaIdState);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const createStar = () => {
    // Firebase에 Image 저장 및 URL 받아오기
    const storageRef = ref(storage, `images/${imageUrl.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl);

    const data = {
      constellationId,
      title,
      imageUrl,
      content,
    };

    try {
      if (title.trim() === "") {
        alert("이름을 입력해주세요");
        return;
      } else if (content.trim() === "") {
        alert("내용을 입력해주세요");
        return;
      } else if (!imageUrl) {
        alert("이미지를 넣어주세요");
        return;
      }

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function
        },
        (error) => {
          // Error handling
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            // 2. 받은 URL back 서버에 저장
            .then(async (downloadURL) => {
              // Removed the extra arrow function
              setImageUrl(downloadURL);
              console.log("data", data);
              const response = await useStarApi.starsPostStar(data);
              // navigateToDetailConstellation(constellationId);
              console.log(response);
            })
            .catch((error) => {
              console.log("Failed to get download url", error);
            });
        },
      );
    } catch (e) {
      console.log(e);
      alert("별 생성에 실패하였습니다. 다시 입력해주세요");
    }
  };

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별 생성하기",
      onClick: createStar,
    },
  ];

  return (
    <div className="flex flex-col space-y-1">
      <div className="my-3 flex flex-row items-center space-x-5">
        <Header1 buttons={buttonsHeader} />
        <p className="flex justify-center font-TAEBAEKmilkyway">별띄우기</p>
      </div>
      <div className="flex flex-col justify-center px-10">
        <BodyRegisterStar
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          setImageUrl={setImageUrl}
        />
      </div>
      <div className="flex justify-center">
        <p className="flex h-12 w-80 items-center justify-center bg-red-500 text-white">
          별자리 초대하기 넣어야 함
        </p>
      </div>
      <div className="flex justify-center">
        <Footer1 buttons={buttonsFooter} />
      </div>
    </div>
  );
};

export default RegisterStar;
