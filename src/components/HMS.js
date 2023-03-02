import React from 'react';
import './HMS.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function HMS({ closeHMS }) {
    return (
        <>
            <div className='HMS_wrapper' onClick={closeHMS}></div>
            <div className='HMS_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem", cursor:"pointer" }} onClick={closeHMS} />
                <h1>Hotel Mangement System</h1>
                <br />
                <p className='Top'> The aim of this project is to develop a web application which helps to manage the
                    data of hotels like Customer Details, Employee Details, Booking Details, Available Room’s, etc</p>
                <div className='HMS_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Develope Frontend using React.js</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Database MySQL</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Spring Suit Tool (Java)</p>
                </div>
            </div>
        </>
    );
}