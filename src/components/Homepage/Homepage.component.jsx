import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm.component";
import Button from "../Button/Button.component";
import FeaturedProject from "../FeaturedProject/FeaturedProject.component";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import LandingImage from "../../assets/Landing_image.svg";
import About from "../About/About.component";

import "./Homepage.styles.css";

const Homepage = () => {
  return (
    <AnimatedPage>
      <div className="homepage">
        <section className="landing">
          <div className="landing-info">
            <h1 className="introduction">
              Hello,
              <span className="row">
                I am <span className="dev-name">Julian</span>,{" "}
              </span>
              <span className="dev-title">Front End Developer.</span>
            </h1>
            <p className="intro-paragraph">
              I love building projects for the web.
            </p>
            <Link to="/contact">
              <Button title={`Let's get in touch!`} className="intro-btn" />
            </Link>
          </div>
          <div className="landing-image">
            <img className="landing-img" src={LandingImage} alt="" />
          </div>
        </section>
        <About />
        <section className="sample-projects">
          <article className="sample-info">
            <h2 className="skills-title">
              <span>Featured</span> Projects
            </h2>
            <p className="skills-info">View some of my featured projects.</p>
            <Link to="/projects">
              <Button title={"More projects"}></Button>
            </Link>
          </article>
          <FeaturedProject
            image={`https://github.com/JulianIfesiokwu/audiophile-ecommerce-website/raw/main/src/assets/Audiophile-Website.png`}
            title={`Audiophile Website`}
            live={`https://audiophile-ecommerce-website-coral.vercel.app/`}
            code={`https://github.com/JulianIfesiokwu/audiophile-ecommerce-website`}
          />
          <FeaturedProject
            title={`Health`}
            image={`https://github.com/JulianIfesiokwu/Health-Wellness-website/raw/main/src/assets/images/Health&Wellness-Website.png`}
            live={`https://health-wellness-website.vercel.app/`}
            code={`https://github.com/JulianIfesiokwu/Health-Wellness-website`}
          />
          <FeaturedProject
            image={`https://github.com/JulianIfesiokwu/shoppers-fun/raw/main/src/assets/Shoppers-Fun-Website.png`}
            title={`Shoppers Fun Website`}
            live={`https://shoppers-fun.vercel.app/`}
            code={`https://github.com/JulianIfesiokwu/shoppers-fun`}
          />
        </section>
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};

export default Homepage;
