import "../styles/homePage.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  return (
      <div id="home" class="container">
        <h2 class="header">Hi! I'm</h2>
        <h1 class="header-name">Nadolf Tagoe</h1>
        <h3 class="job-title">Software Engineer</h3>
        <div class="link-container">
          <a href="https://www.linkedin.com/in/nadolf/" class="icon">
            <FiLinkedin />
          </a>
          <a href="https://github.com/nadolf" class="icon"><FiGithub />
          </a>
        </div>
      </div>
  );
}
