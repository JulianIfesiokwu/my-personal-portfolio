import ContactForm from "../ContactForm/ContactForm.component";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

import "./ContactPage.styles.scss";

const ContactPage = () => {
  return (
    <AnimatedPage>
      <section className="contact-page">
        <ContactForm />
      </section>
    </AnimatedPage>
  );
};

export default ContactPage;
