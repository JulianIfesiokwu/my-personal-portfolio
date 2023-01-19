import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import './bottom.styles.css';

function Bottom() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className='footer'>
            <Link to='/'>developerjulian</Link>
            <p>Copyright {year}</p>
            <div className="social">
                <a
                    href="https://github.com/JulianIfesiokwu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaGithub size="25" className="social-links"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/julian-ifesiokwu-1307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaLinkedin size="25" className="social-links" color='#0072b1' />
                </a>
                <a
                    href="https://twitter.com/mrjules07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                <FaTwitter size="25" className="social-links" color='#00acee' />
                </a>
                <a
                    href="https://www.frontendmentor.io/dashboard/my-challenges?tab=completed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <SiFrontendmentor size="25" className="social-links" />
                </a>
                </div>
            
        </div>
    )
};

export default Bottom;
