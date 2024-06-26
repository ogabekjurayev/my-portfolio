import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Section from "./Section-1";
import MySkills from "./Section-2";
import MyExperience from "./Section-3";
import AboutMe from "./Section-4";
import MyProjects from "./Section-5";
import MyTestimonial from "./Section-6";
import Special from "./Section-7";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <MyProjects />
      <MyTestimonial />
      <Special />
      <Footer />
    </div>
  );
}

export default App;
