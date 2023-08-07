import React from 'react';
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar-list">
                        <div className="navbar-item">
                            <a className='nav-logo' href="#">Textile <br /> Company</a>
                        </div>
                
                        <div className="navbar-item">
                            <a className='nav-link' href="#">Sessions</a>
                            <a className='nav-link' href="#">Contact</a>
                            <a className='nav-link' href="#">Book and Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
