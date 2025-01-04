import "../styles/homePage.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h2 className="header">Hi! I'm</h2>
        <h1 className="header-name">Nadolf Tagoe</h1>
        <h3 className="job-title">Software Engineer</h3>
        <div className="link-container">
          <a href="https://www.linkedin.com/in/nadolf/" className="icon" target="_blank">
            <FiLinkedin />
          </a>
          <a href="https://github.com/nadolf" className="icon" target="_blank">
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img
          className="profile-image"
          src="src/assets/headshoot.jpg"
          alt="headshot"
        />
      </div>
    </div>
  );
}
