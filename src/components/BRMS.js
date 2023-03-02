import React from 'react';
import './BRMS.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function BRMS({ closeBRMS }) {
    return (
        <>
            <div className='BRMS_wrapper' onClick={closeBRMS}></div>
            <div className='BRMS_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem", cursor:"pointer" }} onClick={closeBRMS} />
                <h1>Bike Rental Mangement System</h1>
                <br />
                <p className='Top'>  The aim of this project is to develop a web application which helps to manage
                    the data of bike rental shop like Customer Details, Employee Details, Bike rental Details, Available Bike’s, etc.</p>
                <div className='BRMS_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Develope Frontend using React.js</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Database MySQL</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Spring Suit Tool (Java)</p>
                </div>
            </div>
        </>
    );
}