import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className='Footer'>
                <hr />
                <h1>Ahmad</h1>
                <div className='Footer_menu'>
                    <h3>About</h3>
                    <h3>Services</h3>
                    <h3>Portfolio</h3>
                </div>
                <div className='Footer_icon'>
                    <a href='https://www.instagram.com/mohammad_maaz_ahmad/' target="_blank">
                        <FaInstagram style={{fontSize:"1.58rem"}} />
                    </a>
                    <a href='https://www.linkedin.com/in/md-maaz-ahmad-144858206/' target="_blank" >
                        <FaLinkedin  style={{fontSize:"1.5rem"}}/>
                    </a>
                    <a href="https://github.com/MdMaazAhmad078/" target="_blank" >
                        <FaGithub style={{fontSize:"1.5rem"}}/>
                    </a>
                </div>
                <p>© Ahmad. All Right Reserved</p>
            </div>
        </>
    );
}