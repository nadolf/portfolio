import "../styles/projectPage.css";
import projects from "../../projectsData.json";
import NavigationBar from "../components/NavBar";
import { FiPlay, FiGithub } from "react-icons/fi";

export default function Project() {
    return (
      <>
        <NavigationBar />
        <h1>Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-tile">
              <div class="image-container"><img src={project.image} className="project-image" alt={`${project.title} Image`} /></div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-container">
                  {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                  ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <FiPlay /> Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
