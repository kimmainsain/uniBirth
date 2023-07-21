import React from "react";
import Home from "./components/Home/screens/Home";
// import Signup from "./components/Auth/screens/Signup";
import Login from "./components/Auth/screens/Login";
import SignUp from "./components/Auth/screens/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members/login" element={<Login />} />
      <Route path="/members/register" element={<SignUp />} />
    </Routes>
  );
};

export default App;
