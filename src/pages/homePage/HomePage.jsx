import React from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard.component';
import { FaReact, FaHtml5, FaCss3, FaSass, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

import './HomePage.styles.css';
import backgroundImage from '../../assets/landing-background.jpg';

const HomePage = () => {

  return (
    <main className='home-page' id='home'>
      <section className="landing" style={{
        backgroundImage: `url(${backgroundImage}`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        overflow: `hidden`,
        }}>
        <article className='background-info' data-aos="fade-down">
          <h1 className='big-title'>Hello, I am <span className='bold-text'>Julian.</span></h1>
          <h2 className='small-title'>Frontend developer who uses 
          <span className='bold-text'> javascript </span> 
            to create beautiful
          <span className='bold-text'> websites.</span>
          </h2>
          <a href='#featured-projects'  rel='noopener noreferrer' className='featured-link'>Featured Projects</a>
        </article>        
      </section>
      <section className="about">
        <h2 className='big-title' data-aos="fade-right">About Me</h2>
        <p className='small-title' data-aos="fade-left">Frontend developer who uses javascript, specifically react to create websites, former AltSchool student and at Collab.</p>
        <h3 className='small-title'>Tools/Libraries I am familiar with</h3>
        <article className="tools">
        <div className="tech" data-aos="fade-left">
          <FaReact size="60" className="tech-icon" id="react" color='#61dbfb'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <FaHtml5 size="60" className="tech-icon" id="html" color='#F16529'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <FaCss3 size="60" className="tech-icon" id="css3" color='#2965f1'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <SiJavascript size="60" className="tech-icon" id="javaScript" color='#f0db4f'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <FaSass size="60" className="tech-icon" id="sass" color='c69'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <SiMongodb size="60" className="tech-icon" color='#589636' />
        </div>
        <div className="tech" data-aos="fade-left">
          <FaNodeJs size="60" className="tech-icon" color='#68A063'/>
        </div>
        <div className="tech" data-aos="fade-left">
          <FaGithub size="60" className="tech-icon" />
        </div>
        </article>
      </section>
      <section className="featured-projects" id='featured-projects'>
        <h2 className="big-title">Featured Projects</h2>
        <div className="best-projects">
          <div data-aos="fade-down" data-aos-delay='300' data-aos-offset='300'>
            <ProjectCard
            image={`https://github.com/JulianIfesiokwu/audiophile-ecommerce-website/raw/main/src/assets/Audiophile-Website.png`}
            title={`Audiophile Project`}
            live={`https://audiophile-ecommerce-website-coral.vercel.app/`}
            code={`https://github.com/JulianIfesiokwu/audiophile-ecommerce-website`}
            />
          </div>
          <div data-aos="fade-down" data-aos-delay='600'>
            <ProjectCard
            title={`Health & Wellness Project`}
            image={`https://github.com/JulianIfesiokwu/Health-Wellness-website/raw/main/src/assets/images/Health&Wellness-Website.png`}
            live={`https://health-wellness-website.vercel.app/`}
            code={`https://github.com/JulianIfesiokwu/Health-Wellness-website`}
            />
          </div>
          <div data-aos="fade-down" data-aos-delay='900'>
            <ProjectCard
              image={`https://github.com/JulianIfesiokwu/shoppers-fun/raw/main/src/assets/Shoppers-Fun-Website.png`}
              title={`Shoppers Fun Project`}
              live={`https://shoppers-fun.vercel.app/`}
              code={`https://github.com/JulianIfesiokwu/shoppers-fun`}
            />
          </div>
          <div data-aos="fade-down" data-aos-delay='1200'>
            <ProjectCard
              image={`https://github.com/JulianIfesiokwu/shoppers-fun/raw/main/src/assets/Shoppers-Fun-Website.png`}
              title={`Shoppers Fun Project`}
              live={`https://shoppers-fun.vercel.app/`}
              code={`https://github.com/JulianIfesiokwu/shoppers-fun`}
            />
          </div>
          <div data-aos="fade-down" data-aos-delay='1400'>
            <ProjectCard
              image={`https://github.com/JulianIfesiokwu/shoppers-fun/raw/main/src/assets/Shoppers-Fun-Website.png`}
              title={`Shoppers Fun Project`}
              live={`https://shoppers-fun.vercel.app/`}
              code={`https://github.com/JulianIfesiokwu/shoppers-fun`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
