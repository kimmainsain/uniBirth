// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* Login button */}
      <Link to="/members/login">Login</Link>

      {/* Signup button */}
      <Link to="/members/register">Sign Up</Link>
    </footer>
  );
}

export default Footer;
