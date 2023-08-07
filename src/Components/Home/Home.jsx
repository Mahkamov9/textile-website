import React from 'react';
import "./Home.css";
import Navbar from '../Navbar/Navbar';

export default function Home() {
  return (
    <>
        <div className="home">
                <Navbar/>
            <div className="container">
                <div className="home-list">
                    <h1 className='home-subtext'>Milwaukee Family Forms – Motions & Stipulations</h1>
                    <p className='home-text'>
                        Fast, Convenient, Family <br /> Forms Consulting
                    </p>                
                </div> 
            </div>
        </div>
    </>
  )
}
