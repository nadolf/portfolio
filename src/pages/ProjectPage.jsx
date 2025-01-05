import "../styles/projectPage.css";
import projects from "../../projectsData.json";
import { FiPlay, FiGithub } from "react-icons/fi";
import { useMode } from "../components/ModeContext";
import { useState } from "react";

export default function Project() {
  const { mode } = useMode();

  return (
    <div id="project" className="project-container">
      <h1 className={`project-header ${mode}`}>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className={`project-tile ${mode}`}>
            <div className="image-container">
              <img
                src={project.image}
                className="project-image"
                alt={`${project.title} Image`}
              />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className={`project-description ${mode}`}>
                {project.description}
              </p>
              <h3 className="stack-used-title">Used Stack:</h3>
              <div className="tech-container">
                {project.technologies.map((tech, i) => (
                  <span key={i} className={`tech-pill ${mode}`}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FiPlay /> Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}