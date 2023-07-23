import React from "react";
import Home from "./components/Home/screens/Home";
import Login from "./components/Auth/screens/Login";
import SignUp from "./components/Auth/screens/SignUp";
import DetailConstellation from "./components/Constellation/screens/DetailConstellation";
import ListConstellation from "./components/Constellation/screens/ListConstellation";
import CreateConstellation from "./components/Constellation/screens/CreateConstellation";
import Profile from "./components/Profile/screens/MyProfile";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members/login" element={<Login />} />
      <Route path="/members/register" element={<SignUp />} />
      <Route
        path="/constellations/:constellation_id"
        element={<ListConstellation />}
      />
      <Route
        path="/constellations/detail/:id"
        element={<DetailConstellation />}
      />
      <Route
        path="/constellations/register/:member_id"
        element={<CreateConstellation />}
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
