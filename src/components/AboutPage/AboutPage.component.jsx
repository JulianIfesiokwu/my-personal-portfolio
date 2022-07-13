import AnimatedPage from "../AnimatedPage/AnimatedPage";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaLinkedin,
  FaGithub,
  FaFreeCodeCamp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiStyledcomponents,
  SiFramer,
  SiFrontendmentor,
} from "react-icons/si";
import ContactForm from "../ContactForm/ContactForm.component";
import "./AboutPage.styles.scss";

const AboutPage = () => {
  return (
    <AnimatedPage>
      <div className="about-page">
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
          <div className="tech">
            <SiFramer size="70" className="tech-icon" />
          </div>
        </div>
        <div className="social">
          <a
            href="https://github.com/JulianIfesiokwu"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub size="60" className="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-ifesiokwu-1307/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin size="60" className="social-links" />
          </a>
          <a
            href="https://www.frontendmentor.io/dashboard/my-challenges?tab=completed"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <SiFrontendmentor size="60" className="social-links" />
          </a>
        </div>
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
