import "../components/NavBar.css";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

export default function NavigationBar() {
  return (
    <>
      <div class="navbar-container">
        <h2 class="navigation-header">Nadolf</h2>
        <div class="navigation-container">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
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
