import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/icons/back.png";
import spaceBackground from "../../../assets/images/spaceBackground.png";
import Article1 from "../blocks/article1";

const MyProfile = () => {
  const navigate = useNavigate();

  const imageClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar
        variant="gradient"
        className="mx-auto max-w-screen-xl bg-blue-500 from-blue-900 to-blue-800 px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton color="white">
              <img src={back} onClick={imageClick} className="h-4 w-4" />
            </IconButton>
          </div>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="ml-2 mr-4 cursor-pointer py-1.5"
          >
            나의 프로필 페이지입니다.
          </Typography>
        </div>
      </Navbar>
      <img src={spaceBackground}></img>
      <div>
        <Article1 />
      </div>
    </div>
  );
};
export default MyProfile;
