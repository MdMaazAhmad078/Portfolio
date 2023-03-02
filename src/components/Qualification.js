import React, { useState } from 'react';
import './Qualification.css';
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBriefcaseAlt2 } from "react-icons/bi";

export default function Qualification() {

    const [toggle, setToggle] = useState(1);
    function toggleTab(index) {
        setToggle(index);
    }

    return (
        <>
            <div className='Qualification'>
                <div className='Qualification_header'>
                    <h1>Qualification</h1>
                    <p>My Personal journey</p>
                </div>
                <div className='Qualification_body'>
                    <div className='Qualification_body_header'>
                        <div className={toggle === 1 ? ' Qualification_body_btn_active Qualification_body_btn' : 'Qualification_body_btn'} style={{ marginRight: "2rem" }} onClick={() => toggleTab(1)} >
                            <HiOutlineAcademicCap style={{ fontSize: "35px" }} />
                            <h3 >Education</h3>
                        </div>
                        <div className={toggle === 2 ? 'Qualification_body_btn Qualification_body_btn_active' : 'Qualification_body_btn'} onClick={() => toggleTab(2)}>
                            <BiBriefcaseAlt2 style={{ fontSize: "31px" }} />
                            <h3 >Work</h3>
                        </div>
                    </div>
                    <div className={toggle === 1 ? ' Qualification_body_content_active Qualification_body_content' : 'Qualification_body_content'} >
                        <div className='Qualification_body_content_data_col'>
                            <div className='Data'>
                                <div style={{marginLeft:"3rem"}}>
                                    <h3 className='title'>Bachler Of Engineering</h3>
                                    <span className="sub_title">Hkbk College Of Engineering</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;2019 - Present</div>
                                </div>
                                <div>
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='Data'>
                                <div></div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                                <div style={{ marginLeft: "2rem" }} >
                                    <h3 className='title'>12th</h3>
                                    <span className="sub_title">Gyan Bharti Senior Secondary</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;2017 - 2019</div>
                                </div>

                            </div>
                            <div className='Data'>
                                <div style={{marginLeft:"3rem"}}>
                                    <h3 className='title'>10th</h3>
                                    <span className="sub_title">Elegant Public School</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;2016 - 2017</div>
                                </div>
                                <div >
                                    <span className='round'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggle === 2 ? ' Qualification_body_content_active Qualification_body_content' : 'Qualification_body_content'} >
                        <div className='Qualification_body_content_data_col'>
                            <div className='Data'>
                                <div style={{marginLeft:"2rem"}}>
                                    <h3 className='title' style={{width:"14rem"}}> Placement Management, Prediction & Recommendation System</h3>
                                    <span className="work_sub_title">Final Year Project</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Feb 2023 - Present</div>
                                </div>
                                <div>
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='Data'><div></div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <h3 className='title'>Event Booking System </h3>
                                    <span className="work_sub_title">Simpana</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Dec 2022 - Present</div>
                                </div>
                            </div>
                            <div className='Data'>
                                <div style={{ marginLeft: "2rem" }} >
                                    <h3 className='title'>ToolBox Talk</h3>
                                    <span className="work_sub_title">Simpana</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Jun 2022 -  Dec 2022</div>
                                </div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='Data'>
                                <div></div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <h3 className='title'>Working Windmill</h3>
                                    <span className="work_sub_title" >College</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Apr 2022 - Jun 2022</div>
                                </div>
                            </div>
                            <div className='Data'>
                                <div style={{ marginLeft: "2rem" }} >
                                    <h3 className='title'>Car EMI Calculator</h3>
                                    <span className="work_sub_title">Simpana</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Mar 2022 -  Apr 2022</div>
                                </div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='Data'><div></div>
                                <div >
                                    <span className='round'></span>
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <h3 className='title'>Bike Rental Management System</h3>
                                    <span className="work_sub_title" >College</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Dec 2021 - Jan 2022</div>
                                </div>
                            </div>
                            <div className='Data'>
                                <div style={{ marginLeft: "2rem" }} >
                                    <h3 className='title'>Hotel Management System</h3>
                                    <span className="work_sub_title">Mini Project</span>
                                    <div className='calender'><AiOutlineCalendar />&nbsp;Jun 2021 -  Dec 2021</div>
                                </div>
                                <div >
                                    <span className='round'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}