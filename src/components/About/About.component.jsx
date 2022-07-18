import { FaReact, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";
import "./About.styles.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-landing">
        <h1 className="about-title">
          Frontend developer who uses HTML, CSS, JavaScript to build web
          applications.
        </h1>
      </div>

      <div className="technologies">
        <div className="tech">
          <FaReact size="70" className="tech-icon" id="react" />
        </div>
        <div className="tech">
          <FaHtml5 size="70" className="tech-icon" id="html" />
        </div>
        <div className="tech">
          <FaCss3 size="70" className="tech-icon" id="css3" />
        </div>
        <div className="tech">
          <SiJavascript size="70" className="tech-icon" id="javaScript" />
        </div>
        <div className="tech">
          <FaSass size="70" className="tech-icon" id="sass" />
        </div>
        <div className="tech">
          <SiStyledcomponents size="70" className="tech-icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
