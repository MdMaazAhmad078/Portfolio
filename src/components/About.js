import React from 'react';
import './About.css'
import First from "../image/22.jpeg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";


export default function About() {
    return (
        <div className='about'>
            <div className="about_head">
                <h1>About Me</h1>
                <p>My Introduction</p>
            </div>
            <div className='about_body'>
                <div className='about_body_left'>
                    <img src={First} />
                </div>
                <div className='about_body_right'>
                    <div className='about_body_right_card_row'>
                        <div className='about_body_right_card' style={{width:"13rem"}}>
                            <HiOutlineAcademicCap style={{ fontSize: "1.5rem", fontWeight: "Bold" }} />
                            <p style={{ fontWeight: "Bold" }}>Academic</p>
                            <p>B.E - 8.1(Upto 7th Semester)</p>
                        </div>
                        <div className='about_body_right_card'>
                            <FiBriefcase style={{ fontSize: "1.5rem", fontWeight: "Bold" }} />
                            <p style={{ fontWeight: "Bold" }}>Completed</p>
                            <p>6+ Projects</p>
                        </div>
                        <div className='about_body_right_card'>
                            <BiSupport style={{ fontSize: "1.5rem", fontWeight: "Bold" }} />
                            <p style={{ fontWeight: "Bold" }}>Support</p>
                            <p>Online 24/7</p>
                        </div>
                    </div>
                    <div className='about_body_right_content'>
                        <p>Frontend Developer, I create web pages with UI / UX user interface using React.js.
                        I have completed several projects during by B.E Journey.</p>
                    </div>
                    <div className='about_body_right_button'>
                        <a href={require("../File/Maaz Resume final 1.pdf")} download="Maaz Resume final 1">
                        <div className="about_s_btn">Download CV<AiOutlineFileText/></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}