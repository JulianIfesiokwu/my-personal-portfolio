import About from "../About/About.component";
import ContactForm from "../ContactForm/ContactForm.component";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import "./AboutPage.styles.scss";

const AboutPage = () => {
  return (
    <AnimatedPage>
      <div className="about">
        <About />
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
