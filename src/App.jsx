import React from "react";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Main from "./components/MainPage/main";
import Home from "./components/MainPage/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main/*" element={<Main />} />
    </Routes>
  );
};

export default App;
