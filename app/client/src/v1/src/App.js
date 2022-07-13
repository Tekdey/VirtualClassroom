import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
