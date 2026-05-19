import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Ecosystem />
      <Footer />
    </div>
  );
};

export default App;
