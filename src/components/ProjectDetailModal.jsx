import React from "react";
import "../styles/projectModal.css";
import { useMode } from "../components/ModeContext";

export default function ProjectDetailModal({ isOpen, onClose, project }) {
  const { mode } = useMode();

  if (!isOpen || !project) return null;

  return (
    <div className={`modal-overlay ${mode}`} onClick={onClose}>
      <div
        className={`modal-content ${mode}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={`modal-title ${mode}`}>{project.title}</h2>

        <div className="modal-images">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="modal-image"
            />
          ))}
        </div>
        
        <p className={`modal-description ${mode}`}>{project.modalDescription}</p>

        <div className="tech-modal-container">
          {project.technologies.map((tech, i) => (
            <span key={i} className={`tech-pill ${mode}`}>
              {tech}
            </span>
          ))}
        </div>



        {/* Close Button */}
        <button onClick={onClose} className={`modal-close-btn ${mode}`}>
          Close
        </button>
      </div>
    </div>
  );
}
