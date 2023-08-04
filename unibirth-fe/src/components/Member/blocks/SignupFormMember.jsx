import React, { useCallback } from "react";
import InputPassword from "../../../common/atoms/InputPassword";
import Inputnickname from "../atoms/Inputnickname";
import InputPasswordConfirm from "../atoms/InputPasswordConfirm";
import InputEmail from "../../../common/atoms/InputEmail";
import Button1 from "../../../common/atoms/Button1";
import useMemberApi from "../../../api/useMemberApi";
import InPutZodiac from "../atoms/InputZodiac";
import { debounce } from "lodash";
import { Jodiac } from "../../../constants/zodiac";
const MemberRegistrationForm = ({
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  zodiac,
  setZodiac,
  birthdate,
  setBirthdate,
  image,
  setImage,
  content,
  setContent,
  jodiacname,
  setJodiacname,
}) => {
  const duplicateCheck = useCallback(async (type, value, emptyMessage) => {
    console.log(type, value, emptyMessage);
    if (value === "") {
      alert(emptyMessage);
      return;
    }
    const checkFunc =
      type === "Email"
        ? useMemberApi.membersPostCheckEmail
        : useMemberApi.membersPostCheckNickname;
    const response = await checkFunc(value);
    alert(
      response.status === 200
        ? `사용 가능한 ${type}입니다.`
        : `이미 사용중인 ${type}입니다.`,
    );
  }, []);

  const debouncedSetImage = useCallback(
    debounce((value) => {
      setImage(value);
      console.log(value);
      console.log({ Jodiac });
      const [year, month, day] = value.split("-");
      console.log(year);
      const birthdateAsNumber = parseInt(month + day, 10);
      if (birthdateAsNumber <= 120) {
        setImage(Jodiac[0].image);
        setContent(Jodiac[0].content);
        setJodiacname(Jodiac[0].name);
      } else if (birthdateAsNumber <= 218) {
        setImage(Jodiac[1].image);
        setContent(Jodiac[1].content);
        setJodiacname(Jodiac[1].name);
      } else if (birthdateAsNumber <= 320) {
        setImage(Jodiac[2].image);
        setContent(Jodiac[2].content);
        setJodiacname(Jodiac[2].name);
      } else if (birthdateAsNumber <= 419) {
        setImage(Jodiac[3].image);
        setContent(Jodiac[3].content);
        setJodiacname(Jodiac[3].name);
      } else if (birthdateAsNumber <= 520) {
        setImage(Jodiac[4].image);
        setContent(Jodiac[4].content);
        setJodiacname(Jodiac[4].name);
      } else if (birthdateAsNumber <= 621) {
        setImage(Jodiac[5].image);
        setContent(Jodiac[5].content);
        setJodiacname(Jodiac[5].name);
      } else if (birthdateAsNumber <= 722) {
        setImage(Jodiac[6].image);
        setContent(Jodiac[6].content);
        setJodiacname(Jodiac[6].name);
      } else if (birthdateAsNumber <= 822) {
        setImage(Jodiac[7].image);
        setContent(Jodiac[7].content);
        setJodiacname(Jodiac[7].name);
      } else if (birthdateAsNumber <= 922) {
        setImage(Jodiac[8].image);
        setContent(Jodiac[8].content);
        setJodiacname(Jodiac[8].name);
      } else if (birthdateAsNumber <= 1023) {
        setImage(Jodiac[9].image);
        setContent(Jodiac[9].content);
        setJodiacname(Jodiac[9].name);
      } else if (birthdateAsNumber <= 1122) {
        setImage(Jodiac[10].image);
        setContent(Jodiac[10].content);
        setJodiacname(Jodiac[10].name);
      } else if (birthdateAsNumber <= 1221) {
        setImage(Jodiac[11].image);
        setContent(Jodiac[11].content);
        setJodiacname(Jodiac[11].name);
      } else if (birthdateAsNumber <= 1231) {
        setImage(Jodiac[0].image);
        setContent(Jodiac[0].content);
        setJodiacname(Jodiac[0].name);
      }
    }, 300),

    [],
  );

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
      <InPutZodiac
        onChange={(e) => {
          setBirthdate(e.target.value);
          debouncedSetImage(e.target.value);
          console.log({ zodiac });
        }}
        zodiac={zodiac}
        setZodiac={setZodiac}
        image={image}
        setImage={setImage}
        content={content}
        setContent={setContent}
        jodiacname={jodiacname}
      />
      <Inputnickname
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Button1
        value="닉네임 중복확인"
        className="font-TAEBAEKmilkyway"
        onClick={(event) => {
          event.preventDefault();
          duplicateCheck("Nickname", nickname, "닉네임을 입력해주세요.");
        }}
      />
      <InputEmail
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button1
        value="이메일 중복확인"
        className="font-TAEBAEKmilkyway"
        onClick={(event) => {
          event.preventDefault();
          duplicateCheck("Email", email, "이메일을 입력해주세요.");
        }}
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputPasswordConfirm
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
};

export default MemberRegistrationForm;
