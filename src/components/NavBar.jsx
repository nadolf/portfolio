import "../styles/NavBar.css";
import { Link } from "react-scroll";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

export default function NavigationBar() {
  return (
    <>
      <div class="navbar-container">
        <h2 class="navigation-header">Nadolf</h2>
        <div class="navigation-container">
          <Link to="home" smooth={true} duration={800}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
          <Link to="project" smooth={true} duration={800}>
            Projects
          </Link>
          <a href="src/assets/Tagoe_Nadolf_Resume.pdf" target="_blank">
            Resume
          </a>
          {/* <a>
            <MdOutlineLightMode />
          </a> */}
          <div class="nav-icons">
            <MdOutlineModeNight />
          </div>
        </div>
      </div>
    </>
  );
}
