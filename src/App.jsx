import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Background from "./components/Background.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import "./App.css";
import Projects from "./pages/Projects/Projects.jsx";
import Movflx from "./pages/Projects/movflx/Movflx.jsx";

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
          <Route path="/Projects/Movflx" element= {<Movflx />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
