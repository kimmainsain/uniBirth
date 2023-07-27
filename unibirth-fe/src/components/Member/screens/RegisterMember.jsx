import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import SignupFormMember from "../blocks/SignupFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../api/useFirebaseApi";
import axios from "axios";

// uploadBytes
const RegisterMember = () => {
  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigateToBack, navigateToMainPlanet } = useNavigation();
  const [ServerImageURL, setServerImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname && email && password) {
      console.log("image:", image);
      console.log("imagename:", image.name);
      // 1. image가 있다면 firebase에 저장 / url return
      if (image && image.name) {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress fucntion
          },
          (error) => {
            // error 페이지로 가야 함
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                setServerImageURL(downloadURL);
              })
              .then(() => {
                // axios 요청을 보내야 함
                axios
                  .post("http://3.35.135.57:8080/members/register", {
                    image_Url: ServerImageURL,
                    nickname,
                    email,
                    password,
                  })
                  .then((response) => {
                    console.log(response);
                    // 회원가입이 성공했으면 홈으로 이동
                    navigateToMainPlanet();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                console.log("ServerImageURL:", ServerImageURL);
              });
          },
        );
      }

      // 2. image, nickname, email, password -> server axios 요청
      // 3. 200 response 나오면 로그인 후, 홈으로 이동
      console.log(
        `Image: ${image}, Nickname: ${nickname}, Email: ${email}, Password: ${password}`,
      );
    } else {
      alert("Please fill all the fields!");
    }
  };
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiArrowBack />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원가입",
      onClick: handleSubmit,
    },
  ];

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
      <Header1 buttons={buttonsHeader} />
      <form>
        <SignupFormMember
          image={image}
          setImage={setImage}
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Footer1
          buttons={buttonsFooter}
          image={image}
          nickname={nickname}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default RegisterMember;
