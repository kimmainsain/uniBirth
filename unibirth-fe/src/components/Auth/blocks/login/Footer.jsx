import React from "react";
import { useRecoilValue } from "recoil";
import { emailState, passwordState } from "../../../../recoil/atoms";
import { Link } from "react-router-dom";

function Footer() {
  const username = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);

  const handleLinkClick = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <footer>
      <div>
        <Link
          to="/members/login"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLinkClick}
        >
          Login
        </Link>
        <span> </span>
        <Link
          to="/members/register"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLinkClick}
        >
          Sign Up
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
