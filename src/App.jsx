import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Background from "./components/Background/Background";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import "./App.css";
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <>
      <Background />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element= {<Projects />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
