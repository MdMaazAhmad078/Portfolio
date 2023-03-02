import React from 'react';
import './CMC.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function CMC({ closeCMC }) {
    return (
        <>
            <div className='CMC_wrapper' onClick={closeCMC}></div>
            <div className='CMC_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem",cursor:"pointer" }} onClick={closeCMC} />
                <h1>Car EMI Calculator</h1>
                <br />
                <p className='Top' style={{marginBottom: "0px"}}>  This project is implemented using Java with a graphic software system, android Studio.</p>
                <p className='Top' style={{marginTop:"0rem"}}> It is a simple calculation tool that helps the user to quickly
                    calculate the EMI and view payment schedule.
                </p>
                <div className='CMC_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Develope Frontend using Android Studio</p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Using Java</p>
                </div>
            </div>
        </>
    );
}