import React from "react";
import Home from "./components/Home/screens/Home";
import LoginMember from "./components/Member/screens/LoginMember";
import RegisterMember from "./components/Member/screens/RegisterMember";
import DetailConstellation from "./components/Constellation/screens/DetailConstellation";
import ListConstellation from "./components/Constellation/screens/ListConstellation";
import RegisterConstellation from "./components/Constellation/screens/RegisterConstellation";
import DetailPlanet from "./components/Planet/screens/DetailPlanet";
import ListPlanet from "./components/Planet/screens/ListPlanet";
import DrawingConstellation from "./components/Constellation/screens/DrawingConstellation";
import Profile from "./components/Profile/screens/MemberProfile";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members/login" element={<LoginMember />} />
      <Route path="/members/register" element={<RegisterMember />} />
      <Route
        path="/constellations/:constellation_id"
        element={<ListConstellation />}
      />
      <Route path="/planets/:id" element={<DetailPlanet />} />
      <Route path="/planets" element={<ListPlanet />} />
      <Route
        path="/constellations/detail/:id"
        element={<DetailConstellation />}
      />
      <Route
        path="/constellations/register/:member_id"
        element={<RegisterConstellation />}
      />
      <Route
        path="/constellations/drawing"
        element={<DrawingConstellation />}
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
