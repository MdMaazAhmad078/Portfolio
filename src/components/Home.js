import React from 'react';
import './Home.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import First from "../image/22.jpeg";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className='Home_body'>
        <div className='Home_body_left'>
          <a href='https://www.instagram.com/mohammad_maaz_ahmad/' target="_blank">
            <FaInstagram style={{ fontSize: "1.58rem" }} /><br/><br/>
          </a>
          <a href='https://www.linkedin.com/in/md-maaz-ahmad-144858206/' target="_blank" >
            <FaLinkedin style={{ fontSize: "1.5rem" }} /><br/><br/>
          </a>
          <a href="https://github.com/MdMaazAhmad078/" target="_blank" >
            <FaGithub style={{ fontSize: "1.5rem" }} />
          </a>
        </div>
        <div className='Home_body_right'>
          <div>
            <h1>Md Maaz Ahmad&nbsp;<MdVerified style={{ fontSize: "1.5rem", color: "cornflowerblue" }} /></h1>
            <div style={{ display: "flex" }} ><hr style={{ width: "15%", float: "left" }} />&nbsp;&nbsp;
              <marquee style={{ width: "35%" }}>Web Developer</marquee>
              <div style={{ width: "50%" }}></div>
            </div>
            <br />
            <div style={{ width: "55%" }}>I'm creative designer based in India, and
              I'm very passinate and dedicates to my work..
            </div>
          </div>
          <br /><br /><br />
          <Link to="Contact">  <div className="Home_s_btn">Say Hello!! <FiSend /></div></Link>
        </div>
        <div className='image'></div>
      </div>
    </div>
  );
}
