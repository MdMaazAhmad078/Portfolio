import React from 'react';
import './Contact.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
    return (
        <>
            <div className='contact'>
                <div className='contact_header'>
                <h1>Contact Me</h1>
                    <p>Get in Touch</p>
                </div>
                <div className='contact_body'>
                    <div className='contact_left'>
                        <div className='contact_left_header'>
                            <h1>Talk to me</h1>
                        </div>
                        <div className='contact_left_body'>
                            <div className='contact_left_body_card'>
                                <MdOutlineMarkEmailUnread />
                                <p className='title'>Email</p>
                                <p className='sub_title'>mdmaazahmad120@gmail.com</p>
                                <p className='write'>Write me&nbsp;<AiOutlineArrowRight style={{ fontSize: "15px" }} /></p>
                            </div>
                            <div className='contact_left_body_card'>
                                <BsWhatsapp />
                                <p className='title'>Whatsapp</p>
                                <p className='sub_title'>+91 8102162627</p>
                                <p className='write'>Write me&nbsp;<AiOutlineArrowRight style={{ fontSize: "15px" }} /></p>
                            </div>
                            <div className='contact_left_body_card'>
                                <BsMessenger />
                                <p className='title'>Messenger</p>
                                <p className='sub_title'>mdmaaz.ahmad.98</p>
                                <p className='write'>Write me&nbsp;<AiOutlineArrowRight style={{ fontSize: "15px" }} /></p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <div className='contact_right_header'>
                            <h1>Write me your project</h1>
                        </div>
                        <div className='contact_right_content'>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                className='Box'
                            >
                                <div>
                                    <TextField
                                        id="outlined-required"
                                        label="Name:"
                                        style={{
                                            borderColor: "#212121",
                                            color: "#212121",
                                            borderRadius: "1rem",
                                            width: "100%",
                                            marginBottom: "1rem"
                                        }}
                                        placeholder="Insert Your Name"
                                    />
                                    <br />
                                    <TextField
                                        id="outlined-required"
                                        label="Email:"
                                        style={{
                                            borderColor: "#212121",
                                            color: "#212121",
                                            borderRadius: "1rem",
                                            width: "100%",
                                            marginBottom: "1rem",
                                        }}
                                        placeholder="Insert Your Email"
                                    />
                                    <br />
                                    <TextField
                                        id="outlined-required"
                                        label="Project:"
                                        style={{
                                            borderColor: "#212121",
                                            color: "#212121",
                                            borderRadius: "1rem",
                                            width: "100%",
                                            marginBottom: "2rem",
                                        }}
                                        placeholder="Write Your Project"
                                        rows={5}
                                        multiline
                                    />
                                </div>
                            </Box>
                            <div style={{ paddingLeft: "1.8rem" }}>
                            <div className="contact_s_btn">Send Message<FiSend /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}