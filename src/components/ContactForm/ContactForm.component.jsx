import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { useForm } from "react-hook-form";
import "./ContactForm.styles.scss";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="contact-form">
      <article className="contact-info">
        <h2 className="contact-title">Let's get in touch.</h2>
        <p className="contact-brief">
          Either by email or through social media.
        </p>
        <div className="social">
          <a
            href="https://github.com/JulianIfesiokwu"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub size="30" className="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-ifesiokwu-1307/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin size="30" className="social-links" />
          </a>
          <a
            href="https://www.frontendmentor.io/dashboard/my-challenges?tab=completed"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <SiFrontendmentor size="30" className="social-links" />
          </a>
        </div>
      </article>
      <form
        className="message-form"
        action="https://formsubmit.co/julianifesiokwu@gmail.com"
        method="POST"
      >
        <div className="details">
          <div className="details-input">
            <label htmlFor="" className="name-label">
              Name
            </label>
            <input
              name="Client-name"
              type="text"
              className="client-name"
              placeholder="Name"
              {...register("clientName", { required: "Oops! Enter your name" })}
            />
            {errors.clientName && (
              <span className="error-message">{errors.clientName.message}</span>
            )}
          </div>
          <div className="details-input">
            <label htmlFor="" className="email-label">
              Email
            </label>
            <input
              name="Client-email"
              type="email"
              className="client-email"
              placeholder="E-mail"
              {...register("clientEmail", {
                required: "Oops! Your email is required.",
              })}
            />
            {errors.clientEmail && (
              <span className="error-message">
                {errors.clientEmail.message}
              </span>
            )}
          </div>
        </div>
        <div className="message-container">
          <label htmlFor="" className="message-label">
            Your message
          </label>
          <textarea
            name="Client-Message"
            id="message-label"
            className="message"
            placeholder="Your message here..."
            {...register("clientMessage", { required: "Your message" })}
          ></textarea>
          {errors.clientMessage && (
            <span className="error-message">
              {errors.clientMessage.message}
            </span>
          )}
        </div>
        <button type="submit">Contact me!</button>
      </form>
    </section>
  );
};

export default ContactForm;
