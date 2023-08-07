import React from 'react';
import './About.css';

import Img from "../../Assets/Svg/about-top.svg";

export default function About() {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="about-list">
                    <div className="about-item">
                        <p className='about-subtext'>Who We Are</p>
                        <p className='about-text'>Milwaukee’s Family Court Expert</p>
                        <p className='about-title'>With over 22 year experience working with Milwaukee County, we can work with you to ensure the best environment and what’s most convenient when you need to file Milwaukee Family Forms-Motions & Stipulations.</p>
                    </div>

                    <div className="about-item">
                        <img className='about-img' src="https://www.allianz-trade.com/content/onemarketing/aztrade/allianz-trade_com/en_global/news-insights/economic-insights/Bruised-but-not-beaten-Europe-s-textile-industry-is-a-perfect-candidate-for-a-greener-and-digital-recovery.thumb.1280.1280.png?ck=1643720621" alt="" />
                        <img className='about-img' src="https://engmag.in/wp-content/uploads/2021/09/Textile-Industry.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
