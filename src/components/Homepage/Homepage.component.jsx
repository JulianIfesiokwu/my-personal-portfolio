import ContactForm from '../ContactForm/ContactForm.component'
import Button from '../Button/Button.component'

import './Homepage.styles.scss'

const Homepage = () => {

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
            <ContactForm />

        </div>
    )
}

export default Homepage