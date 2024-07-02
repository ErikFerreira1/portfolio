import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Background from "./components/Background/Background";
import Home from "./components/Home/Home.jsx";

const App = () => {
  return (
    <>
      <Background />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
