import React from 'react';
import './Skills.css';
import { MdVerified } from "react-icons/md";

export default function Skills() {
    return (
        <div className='skills'>
            <div className='skills_header'>
                <h1>Skills</h1>
                <p>My Technical Level</p>
            </div>
            <div className='skills_body'>
                <div className='skills_body_left'>
                    <div className='skills_body_left_header'><h2>Frontend Developer</h2></div>
                    <div className='skills_body_left_content'>
                        <div className='skills_body_left_content_row'>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>HTML</p></div>
                                <p>Intermediate</p>
                            </div>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>BootStrap</p></div>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='skills_body_left_content_row'>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>CSS</p></div>
                                <p>Intermediate</p>
                            </div>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>Git</p></div>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='skills_body_left_content_row' style={{ gap: "11rem" }}>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>JavaScript</p></div>
                                <p>Basic</p>
                            </div>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>React.js</p></div>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills_body_right'>
                    <div className='skills_body_left_header'><h2>Backend Developer</h2></div>
                    <div className='skills_body_left_content'>
                        <div className='skills_body_left_content_row'>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>Spring</p></div>
                                <p>Basic</p>
                            </div>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>MySQL</p></div>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div className='skills_body_left_content_row'>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>Node.js</p></div>
                                <p>Basic</p>
                            </div>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>JAVA</p></div>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div className='skills_body_left_content_row' style={{ gap: "11rem" }}>
                            <div className='skills_body_left_content_row_line'>
                                <div className='row_head'><MdVerified style={{ color: "#212121" }} /><p>SQL</p></div>
                                <p>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}