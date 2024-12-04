import React from "react";
import NavigationBar from "../components/NavBar";
import Home from "./HomePage";
import About from "./AboutPage";
import Project from "./ProjectPage";
import { DarkLightMode } from "../components/ModeContext";
export default function Main() {
  return (
    <DarkLightMode>
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
    </DarkLightMode>
  );
}
