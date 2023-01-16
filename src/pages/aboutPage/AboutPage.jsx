import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm.component';
import './AboutPage.styles.css';
import ProjectBackground from '../../assets/project-background.jpg';

const AboutPage = () => {
  return (
    <main className='about-page'>
      <section className="landing" style={{
        backgroundImage: `url(${ProjectBackground}`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        overflow: `hidden`,
        }}>
        <article className='background-info'>
          <h2 className='small-title'>Frontend developer who uses 
          <span className='bold-text'> javascript </span> 
            to create beautiful
          <span className='bold-text'> websites.</span>
          </h2>
          <a href='/#featured-projects'  rel='noopener noreferrer' className='featured-link'>Featured Projects</a>
        </article>        
      </section>
      <section className='all-projects'></section>
      <ContactForm />
    </main>
  );
};

export default AboutPage;
