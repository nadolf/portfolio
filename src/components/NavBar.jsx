import "../styles/NavBar.css";
import resume from "../assets/Tagoe_Nadolf_Resume.pdf";
import logo from "../assets/tab-logo.png";
import { Link } from "react-scroll";
import { useMode } from "../components/ModeContext";
import {
  MdOutlineLightMode,
  MdOutlineModeNight,
  MdDehaze,
} from "react-icons/md";
import { useState } from "react";

export default function NavigationBar() {
  const { mode, toggleMode } = useMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-container ${mode}`}>
      <div className="navigation-logo">
        <img className="logo-image" src={logo} alt="headshot" />
      </div>
      {/* Hamburger icon */}
      <div className={`hamburger-icon ${mode}`} onClick={toggleMenu}>
        <MdDehaze size={30} />
      </div>

      <div
        className={`navigation-container ${isMenuOpen ? "active" : ""} ${mode}`}
      >
        <Link
          to="home"
          smooth={true}
          duration={800}
          className={`nav-link ${mode}`}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={800}
          className={`nav-link ${mode}`}
        >
          About
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={800}
          className={`nav-link ${mode}`}
        >
          Projects
        </Link>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link ${mode}`}
        >
          Resume
        </a>
        <div className="nav-icons" onClick={toggleMode}>
          {mode === "light" ? (
            <MdOutlineLightMode size={25} />
          ) : (
            <MdOutlineModeNight size={25} />
          )}
        </div>
      </div>
    </div>
  );
}
