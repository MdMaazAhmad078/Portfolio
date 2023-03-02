import React, { useState } from 'react';
import './Service.css';
import { FiLayout } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineDeveloperMode } from "react-icons/md";
import FullStack from "../image/fullstack.png";
import FrontEndModel from './FrontEndModel';
import BackEndModel from './BackEndModel';
import FullStackModel from './FullStackModel';
import { Link } from "react-router-dom";

export default function Service() {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const [showBack, setShowBack] = useState(false);
    const closeBack = () => setShowBack(false);

    const [showFull, setShowFull] = useState(false);
    const closeFull = () => setShowFull(false);
    return (
        <>
            <div className='Service'>
                <div className='Service_header'>
                    <h1>Services</h1>
                    <p>What | offer</p>
                </div>
                <div className='Service_body'>
                     <div className='Service_body_card'  onClick={() => setShowModal(true)}>
                        <FiLayout style={{ fontSize: "1.7rem" }} />
                        <h3>Frontend Developer</h3>
                        <p>View More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                    </div>
                    <div className='Service_body_card' onClick={() => setShowBack(true)}>
                        <MdOutlineDeveloperMode style={{ fontSize: "1.7rem" }} />
                        <h3>Backend Developer</h3>
                        <p>View More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                    </div>
                    <div className='Service_body_card' style={{width:"17%"}} onClick={() => setShowFull(true)}>
                        <img src={FullStack} style={{ width: "13.5%" }} />
                        <h3>FullStack Developer</h3>
                        <p>View More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                    </div>
                    {showModal && <FrontEndModel closeModal={closeModal} />}
                    {showBack && <BackEndModel closeBack={closeBack} />}
                    {showFull && <FullStackModel closeFull={closeFull} />}
                </div>
            </div>
        </>
    );
}
