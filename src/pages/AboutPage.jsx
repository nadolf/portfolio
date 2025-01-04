import "../styles/aboutPage.css";
import { useMode } from "../components/ModeContext";
const skills = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React.Js",
  "React Native",
  "SQL",
  "RESTful API",
  "Git",
];

export default function About() {
  const { mode } = useMode();
  return (
    <div id="about" className={`about-container ${mode}`}>
      <h1 className={`about-header ${mode}`}>About Me</h1>
      <div className="content-container">
        <div className={`text-content ${mode}`}>
          <p>
            Hi, I'm Nadolf Tagoe. I'm a recent Computer Science graduate with a
            focus on Software Engineering and Computer Systems. With experience
            in Front-End and Mobile development, I'm passionate about building
            applications and continuously refining my skills.
          </p>
          <div>
            <strong className="section-header">Skills:</strong>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="certification-section">
            <strong className="section-header">Certifications:</strong>
            <div className="certification-badge-container">
              <img
                className="certification-badge-image"
                src="src/assets/aws-certified-cloud-practitioner-badge.png"
                alt="AWS Cloud Practitioner Certification Badge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
