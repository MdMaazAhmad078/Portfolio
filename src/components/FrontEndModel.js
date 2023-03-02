import React from 'react';
import './FrontEndModel.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FrontEndModel({closeModal}) {
    return (
        <>
            <div className='FrontEndModel_wrapper' onClick={closeModal}></div>
            <div className='FrontEndModel_container'>
                <AiOutlineClose style={{float:"right", fontSize:"1.5rem",cursor:"pointer"}} onClick={closeModal}/>
                <h1>Frontend Developer</h1>
                <br />
                <p className='Top'>Service with more than 1.5 Years of experience. Develope upto 4+ Projects</p>
                <div className='FrontEndModel_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; I develop the user interface.</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Web Page Development.</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; I create interactive web pages.</p>
                </div>
            </div>
        </>
    );
}