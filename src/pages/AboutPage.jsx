import "../styles/aboutPage.css";
import { useMode } from "../components/ModeContext";
import certificationIcon from "../assets/aws-certified-cloud-practitioner-badge.png";
const skills = [
  // Programming Languages
  "Python",
  "JavaScript",
  "SQL",
  "NoSQL",

  // Web Development
  "HTML",
  "CSS",
  "GraphQL",
  "RESTful API",

  // Frameworks & Libraries
  "React.Js",
  "React Native",
  "Node.js",
  "Express.js",

  // Testing
  "Jest",

  // Tools & Platforms
  "Git",
  "Figma",
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
              <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/a66730b6f3f4488aa06a632776380618">
              <img
                className="certification-badge-image"
                src={certificationIcon}
                alt="AWS Cloud Practitioner Certification Badge"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
