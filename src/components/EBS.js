import React from 'react';
import './EBS.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function EBS({ closeEBS }) {
    return (
        <>
            <div className='EBS_wrapper' onClick={closeEBS}></div>
            <div className='EBS_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem", cursor:"pointer" }} onClick={closeEBS} />
                <h1>Event Booking System</h1>
                <br />
                <p className='Top' >  The aim of this project is to develop a web application which helps to manage the data
                    of Event Venue like Customer Details, Employee Details, Booking Details, Available Room’s & Hall’s, etc
                </p>
                <div className='EBS_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Develope Frontend using React.js</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Database MySQL</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Spring Suit Tool (Java)</p>
                </div>
            </div>
        </>
    );
}