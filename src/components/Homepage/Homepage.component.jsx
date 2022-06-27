import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Button from '../Button/Button.component'
import { FaLinkedin,FaGithub } from "react-icons/fa";

import './Homepage.styles.scss'


const Homepage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className="homepage">
            <section className="landing">
                <h1 className="introduction">Hello, <span className="row">I am <span className="dev-name">Julian</span>, </span>
                <span className="dev-title">Front End Developer.</span>
                </h1>
                <p className='intro-paragraph'>I love building projects for the web.</p>
                <Button title={`Let's get in touch!`} className="intro-btn"/>
            </section>
            <section className="skills">
                <article className="skills-info">
                    <h2 className="skills-title"><span>Skills</span> & tools</h2>
                    <p className="about-skills-info">For a more detailed overview, please feel free to check the tools that were used on a per-project basis.</p>
                </article>
                <article className="skills-img">
                    <img src='https://www.careeraddict.com/uploads/article/59292/illustration-man-desk.png' alt='' />
                </article>                
            </section>
            <section className="sample-projects">
                <article className="sample-info">
                    <h2 className="skills-title"><span>Featured</span> Projects</h2>
                    <p>View some of my featured projects or better yet, view all my projects.</p>
                    <Button title={'view all projects'}></Button>
                </article>
                <article className="fav-projects"></article>
            </section>
            <section className="contact-form">
                <article className="contact-info">
                    <h2 className='contact-title'>Let's get in touch.</h2>
                    <p>Either by email or through social media.</p>
                    <div className="social">
                        <Link to='/'><FaGithub size='30' /></Link>
                        <Link to='/'><FaLinkedin size='30' /></Link>
                    </div>
                </article>
                <form className="message-form">
                    <div className="details">
                        <div className="details-input">
                            <label htmlFor="" className="name-label">Name
                                <input type="text" className="client-name" placeholder="Name" />
                            </label>
                        </div>
                        <div className="details-input">
                            <label htmlFor="" className="email-label">Email
                                <input type="email" className="client-email" placeholder="E-mail" />
                            </label>
                        </div>
                    </div>
                    <div className="message-container">
                        <textarea name="" id="" className='message'></textarea>
                    </div>
                    <Button title={`Message me!`}/>
                </form>
            </section>
        </div>
    )
}

export default Homepage