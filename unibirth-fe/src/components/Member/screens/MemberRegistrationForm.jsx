import React from "react";

const MemberRegistrationForm = ({
  image,
  setImage,
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Nickname:
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </form>
  );
};

export default MemberRegistrationForm;
