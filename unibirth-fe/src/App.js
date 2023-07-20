import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/screens/Home";
import Login from "./components/Home/screens/Login";
import MyProfile from "./components/Profile/screens/MyProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/profiles" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
