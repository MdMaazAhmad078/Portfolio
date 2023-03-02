import React from 'react';
import './TBT.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function TBT({ closeTBT }) {
    return (
        <>
            <div className='TBT_wrapper' onClick={closeTBT}></div>
            <div className='TBT_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem", cursor:"pointer" }} onClick={closeTBT} />
                <h1>ToolBox Tool</h1>
                <br />
                <p className='Top' >  The aim of this project is to develop a web application which helps to manage the data like 
Project Details, Schedule Meetings, Stores the record of attendance in meeting, etc.
                </p>
                <div className='TBT_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Support Multi-Language feature</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Develope Frontend using React.js</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Database MySQL</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Spring Suit Tool (Java)</p>
                </div>
            </div>
        </>
    );
}