import { Link } from "react-router-dom";
import Button from "../Button/Button.component";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { useForm } from 'react-hook-form'
import "./ContactForm.styles.scss"

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
            <section className="contact-form">
                <article className="contact-info">
                    <h2 className='contact-title'>Let's get in touch.</h2>
                    <p className="contact-brief">Either by email or through social media.</p>
                    <div className="social">
                        <Link to='/'><FaGithub size='30' className="social-links" /></Link>
                        <Link to='/'><FaLinkedin size='30' className="social-links" /></Link>
                        <Link to='/'><SiFrontendmentor size='30' className="social-links" /></Link>
                    </div>
                </article>
                <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="details">
                        <div className="details-input">
                            <label htmlFor="" className="name-label">Name</label>
                            <input type="text" className="client-name" placeholder="Name" {...register('clientName', {required: "Enter your name"})} />
                            {errors.clientName && <span className="error-message">{errors.clientName.message}</span>}
                        </div>
                        <div className="details-input">
                            <label htmlFor="" className="email-label">Email</label>
                            <input type="email" className="client-email" placeholder="E-mail" {...register("clientEmail", {required: "Enter your email"})} />
                            {errors.clientEmail && <span className="error-message">{errors.clientEmail.message}</span>}
                        </div>
                    </div>
                    <div className="message-container">
                        <label htmlFor="" className="message-label">Your message</label>
                        <textarea name="" id="message-label" className='message' placeholder="Your message here" {...register("clientMessage", {required: "Enter your message"})}></textarea>
                        {errors.clientMessage && <span className="error-message">{errors.clientMessage.message}</span>}
                    </div>
                    <Button title={`Contact me!`}/>
                </form>
            </section>
    )}

    export default ContactForm