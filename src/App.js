import React from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./header/Navbar";
import Home from "./components/Home";
import About1 from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foter from "./header/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Foter />
      </Router>
    </>
  );
};
export default App;
