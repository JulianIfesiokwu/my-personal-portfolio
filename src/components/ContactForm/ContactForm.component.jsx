import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { contactFormContext } from '../../contexts/contactFormContext';
import './ContactForm.styles.css';

const ContactForm = () => {
  const { handleChange, handleSubmit } = useContext(contactFormContext);
  return (
    <section className="contact-form" id='contact'>
      <article className="contact-info">
        <h2 className="big-title">Let's Connect.</h2>
        <p>Find me on any of the platforms below or send me a mail.</p>
        <div className="social-form-links">
          <a
            href="https://github.com/JulianIfesiokwu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size="40" className="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-ifesiokwu-1307/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size="40" className="social-links" color='#0072b1' />
          </a>
          <a
            href="https://twitter.com/mrjules07"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaTwitter size="40" className="social-links" color='#00acee' />
          </a>
          <a
            href="https://www.frontendmentor.io/dashboard/my-challenges?tab=completed"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <SiFrontendmentor size="40" className="social-links" />
          </a>
        </div>
      </article>
      <form
        className="message-form"
        action="https://formsubmit.co/julianifesiokwu@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="details">
            <input
              name="Client-name"
              type="text"
              className="client-name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              name="Client-email"
              type="email"
              className="client-email"
              placeholder="E-mail"
              onChange={handleChange}
            />
        </div>
        <div className="message-container">
          <textarea
            rows='8'
            name="Client-Message"
            id="message-label"
            className="message"
            placeholder="Your message here..."
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="contact-btn">
          Send Mail
        </button>
      </form>
    </section>
  )
}

export default ContactForm;
