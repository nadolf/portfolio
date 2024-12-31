import "../styles/projectPage.css";
import projects from "../../projectsData.json";
import { FiPlay, FiGithub, FiInfo } from "react-icons/fi";
import { useMode } from "../components/ModeContext";
import { useState } from "react";
import ProjectDetailModal from "../components/ProjectDetailModal";

export default function Project() {
  const { mode } = useMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="project" className="project-container">
      <h1 className={`project-header ${mode}`}>Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-tile ${mode}`}>
            <div className="image-container">
              <img src={project.image} className="project-image" alt={`${project.title} Image`} />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className={`project-description ${mode}`}>{project.description}</p>
            <div className="tech-container">
              {project.technologies.map((tech, i) => (
                <span key={i} className={`tech-pill ${mode}`}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                <FiPlay /> Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                <FiGithub /> Code
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(project);
                }}
                className="project-icon"
              >
                <FiInfo /> Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <ProjectDetailModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
}
