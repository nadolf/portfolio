import "../styles/NavBar.css";
import { Link } from "react-scroll";
import { useMode } from "../components/ModeContext";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

export default function NavigationBar() {
  const { mode, toggleMode } = useMode();
  return (
    <div className={`navbar-container ${mode}`}>
      <h2 className="navigation-header">Nadolf</h2>
      <div className="navigation-container">
        <Link to="home" smooth={true} duration={800} className={`nav-link ${mode}`}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={800} className={`nav-link ${mode}`}>
          About
        </Link>
        <Link to="project" smooth={true} duration={800} className={`nav-link ${mode}`}>
          Projects
        </Link>
        <a href="src/assets/Tagoe_Nadolf_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`nav-link ${mode}`}>
          Resume
        </a>
        <div className="nav-icons" onClick={toggleMode}>
          {mode === "light" ? <MdOutlineLightMode /> : <MdOutlineModeNight />} 
        </div>
      </div>
    </div>
  );
}
