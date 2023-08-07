import React, { useCallback } from "react";
import InputPassword from "../../../common/atoms/InputPassword";
import Inputnickname from "../atoms/Inputnickname";
import InputPasswordConfirm from "../atoms/InputPasswordConfirm";
import Button1 from "../../../common/atoms/Button1";
import useMemberApi from "../../../api/useMemberApi";
const MemberModifyForm = ({
  nickname,
  setNickname,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
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

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
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

export default MemberModifyForm;
