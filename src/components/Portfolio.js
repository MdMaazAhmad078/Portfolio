import React, { useState } from 'react';
import './Portfolio.css';
import First from "../image/3.jfif";
import Second from "../image/4.jfif";
import Third from "../image/2.jfif";
import Fourth from "../image/1.webp";
import Fifth from "../image/5.jfif";
import Sixth from "../image/6.jfif";
import Seventh from "../image/7.jfif";
import { AiOutlineArrowRight } from "react-icons/ai";
import HMS from './HMS';
import BRMS from './BRMS';
import CMC from './CMC';
import WW from './WW';
import EBS from './EBS';
import TBT from './TBT';

export default function Portfolio() {

    const [showHMS, setShowHMS] = useState(false);
    const closeHMS = () => setShowHMS(false);

    const [showBRMS, setShowBRMS] = useState(false);
    const closeBRMS = () => setShowBRMS(false);

    const [showCMC, setShowCMC] = useState(false);
    const closeCMC = () => setShowCMC(false);

    const [showWW, setShowWW] = useState(false);
    const closeWW = () => setShowWW(false);

    const [showEBS, setShowEBS] = useState(false);
    const closeEBS = () => setShowEBS(false);

    const [showTBT, setShowTBT] = useState(false);
    const closeTBT = () => setShowTBT(false);

    const [toggle, setToggle] = useState(1);
    function toggleTab(index) {
        setToggle(index);
        console.log(index)
    }
    return (
        <>
            <div className='portfolio'>
                <div className='portfolio_header'>
                    <h1>Portfolio</h1>
                    <p>Most recent work</p>
                </div>
                <div className='portfolio_body'>
                    <div className='portfolio_body_header'>
                        <div className={toggle === 1 ? ' portfolio_body_header_icon_active portfolio_body_header_icon' : 'portfolio_body_header_icon'} onClick={() => toggleTab(1)}  ><h4>All</h4></div>
                        <div className={toggle === 2 ? ' portfolio_body_header_icon_active portfolio_body_header_icon' : 'portfolio_body_header_icon'} onClick={() => toggleTab(2)}><h4>Web</h4></div>
                        <div className={toggle === 3 ? ' portfolio_body_header_icon_active portfolio_body_header_icon' : 'portfolio_body_header_icon'} onClick={() => toggleTab(3)}><h4>App</h4></div>
                    </div>
                    <div className={toggle === 1 ? ' portfolio_body_content  portfolio_body_content_row_active' : 'portfolio_body_content_row_active'}>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowHMS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Fifth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Hotel Management System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowBRMS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Second} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Bike Reantal Management System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowCMC(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Sixth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Car EMI Calculator</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowWW(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Seventh} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Working Windmill</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowEBS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Third} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Event Booking System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card'>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Fourth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Placement Management, Prediction & Recommendation System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowTBT(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Third} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>ToolBox Talk</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggle === 2 ? ' portfolio_body_content  portfolio_body_content_row_active' : 'portfolio_body_content_row_active'}>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowHMS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Sixth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Hotel Management System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowBRMS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Seventh} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Bike Reantal Management System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowEBS(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Third} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Event Booking System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card'>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Fourth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Placement Management, Prediction & Recommendation System</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowTBT(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Third} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>ToolBox Talk</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggle === 3 ? ' portfolio_body_content_app  portfolio_body_content_row_active' : 'portfolio_body_content_row_active'}>
                        <div className='portfolio_body_content_row'>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowCMC(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Third} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Car EMI Calculator</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                            <div className='portfolio_body_content_row_card' onClick={() => setShowWW(true)}>
                                <div className='portfolio_body_content_row_card_image'>
                                    <img src={Fourth} />
                                </div>
                                <div className='portfolio_body_content_row_card_data'>
                                    <p style={{ fontWeight: "Bold" }}>Working Windmill</p>
                                    <p className='read'>Read More&nbsp; &nbsp;<AiOutlineArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showHMS && <HMS closeHMS={closeHMS} />}
                    {showBRMS && <BRMS closeBRMS={closeBRMS} />}
                    {showCMC && <CMC closeCMC={closeCMC} />}
                    {showWW && <WW closeWW={closeWW} />}
                    {showEBS && <EBS closeEBS={closeEBS} />}
                    {showTBT && <TBT closeTBT={closeTBT} />}
                </div>
            </div>
        </>
    );
}