import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-list">
            <div className="footer-item">
              <p className='footer-subtext'>HOPE is being able to see that there is LIGHT despite all of the darkness.</p>
              <p className='footer-text'>Desmond Tutu</p>
            </div>

            <div className="footer-item">
              <p className='footer-logo'>
                Textile  Company
              </p>
              <div className='footer-link-box'>
                <a href="#"> Sessions </a>
                <a href="#"> Contact </a>
                <a href="#"> Booking </a>
              </div>
              <div className='footer-icon-box'>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">You Tube</a>
              </div>
              <p className='footer-tag-text'>
                Copyright © 2023
                Allgood Family Forms Consultants |
                Made by Layerly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
