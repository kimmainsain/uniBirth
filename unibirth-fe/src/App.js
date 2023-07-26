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
import MemberProfile from "./components/Profile/screens/MemberProfile";
import Followings from "./components/Profile/screens/Followings";
import Followers from "./components/Profile/screens/Followers";
import ModifyProfile from "./components/Profile/screens/ModifyProfile";
import DirectMessage from "./components/Profile/screens/DirectMessage";
import MessageBox from "./components/Profile/screens/MessageBox";

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
      <Route path="/profiles/:id" element={<MemberProfile />} />
      <Route path="/profiles/followings/:id" element={<Followings />} />
      <Route path="/profiles/followers/:id" element={<Followers />} />
      <Route path="/profiles/modify/:id" element={<ModifyProfile />} />
      <Route path="/profiles/directmessage/:id" element={<DirectMessage />} />
      <Route path="/profiles/messagebox/:id" element={<MessageBox />} />
    </Routes>
  );
};

export default App;
