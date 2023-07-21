import React from "react";
import Home from "./components/Home/screens/Home";
import { Login } from "./components/Auth/screens/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
