import React from 'react';
import './WW.css';
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function WW({ closeWW }) {
    return (
        <>
            <div className='WW_wrapper' onClick={closeWW}></div>
            <div className='WW_container'>
                <AiOutlineClose style={{ float: "right", fontSize: "1.5rem", cursor:"pointer" }} onClick={closeWW} />
                <h1>Working Windmill</h1>
                <br />
                <p className='Top' >   With the help of OpenGL and GLUT libraries it creates a view of bicycle and animates it as it moves around the
                    screen
                </p>
                <div className='WW_content'>
                    <p><BsCheckCircle />&nbsp; &nbsp; Computer Graphics Using OpenGL  </p>
                    <p><BsCheckCircle />&nbsp; &nbsp; Using C++</p>
                </div>
            </div>
        </>
    );
}