import React, { useState } from "react";
import MemberRegistrationForm from "./MemberRegistrationForm";
import ButtonG from "./ButtonG";

const MemberRegistrationPage = () => {
  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (image && nickname && email && password) {
      // submit logic here
      console.log(
        `Image: ${image}, Nickname: ${nickname}, Email: ${email}, Password: ${password}`,
      );
    } else {
      alert("Please fill all the fields!");
    }
  };

  return (
    <div>
      <MemberRegistrationForm
        image={image}
        setImage={setImage}
        nickname={nickname}
        setNickname={setNickname}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <ButtonG
        image={image}
        nickname={nickname}
        email={email}
        password={password}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MemberRegistrationPage;
