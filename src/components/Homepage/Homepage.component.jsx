import ContactForm from "../ContactForm/ContactForm.component";
import Button from "../Button/Button.component";
import FeaturedProject from "../FeaturedProject/FeaturedProject.component";

import "./Homepage.styles.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="landing">
        <h1 className="introduction">
          Hello,{" "}
          <span className="row">
            I am <span className="dev-name">Julian</span>,{" "}
          </span>
          <span className="dev-title">Front End Developer.</span>
        </h1>
        <p className="intro-paragraph">I love building projects for the web.</p>
        <Button title={`Let's get in touch!`} className="intro-btn" />
      </section>
      <section className="skills">
        <article className="skills-info">
          <h2 className="skills-title">
            <span>Skills</span> & tools
          </h2>
          <p className="about-skills-info">
            For a more detailed overview, please feel free to check the tools
            that were used on a per-project basis.
          </p>
        </article>
        <article className="skills-img">
          <img
            src="https://www.careeraddict.com/uploads/article/59292/illustration-man-desk.png"
            alt=""
          />
        </article>
      </section>
      <section className="sample-projects">
        <article className="sample-info">
          <h2 className="skills-title">
            <span>Featured</span> Projects
          </h2>
          <p className="skills-info">View some of my featured projects.</p>
          <Button title={"more projects"}></Button>
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
  );
};

export default Homepage;
