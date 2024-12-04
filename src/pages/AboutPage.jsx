import "../styles/aboutPage.css";
import { useMode } from "../components/ModeContext"; // Import the useMode hook

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
  const { mode } = useMode(); // Get the current mode (light or dark)

  return (
    <div id="about" className={`about-container ${mode}`}> {/* Apply the mode class here */}
      <h1 className="about-header">About Me</h1>
      <div className="content-container">
        <div className="text-content">
          <p>
            Hi, I'm Nadolf Tagoe, a senior majoring in Computer Science with a focus in
            Software Engineering and Computer Systems. I'm passionate about
            Frontend and Mobile Development. During my internships at Navy
            Federal Credit Union and Virtual, Inc., I contributed to platform
            redesigns, fixed front-end issues, and improved accessibility. I'm
            eager to keep learning and growing as a developer.
          </p>
          <div>
            <strong>Skills:</strong>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="certification-section">
            <strong>Certifications:</strong>
            <div className="certification-badge-container">
              <img
                className="certification-badge-image"
                src="src/assets/aws-certified-cloud-practitioner-badge.png"
                alt="AWS Cloud Practitioner Certification Badge"
              />
            </div>
          </div>
        </div>
        <img
          className="profile-image"
          src="src/assets/headshoot.jpg"
          alt="headshot"
        />
      </div>
    </div>
  );
}
