import React from "react";
import NavigationBar from "../components/NavBar";
import Home from "./HomePage";
import About from "./AboutPage";
import Project from "./ProjectPage";

export default function Main() {
  return (
    <div>
      <NavigationBar />
      <div style={{ scrollBehavior: "smooth" }}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
      </div>
    </div>
  );
}
