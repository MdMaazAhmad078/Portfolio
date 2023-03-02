import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='Header'>
            <div className='Home_Header'>
                <div className='Home_Header_left'>Ahmad</div>
                <div className='Home_Header_right'>
                    <Link to="/"><div>Home</div></Link>
                    <Link to="About"><div>About</div></Link>
                    <Link to="Skills"><div>Skills</div></Link>
                    <Link to="Service"><div>Service</div></Link>
                    <Link to="Qualification"><div>Qualification</div></Link>
                    <Link to="Portfolio"><div>Projects</div></Link>
                    <Link to="Contact"><div>Contact</div></Link>
                </div>
            </div>
        </div>
    );
}