import React from 'react';
import './Aside.css';

import AsideImg1 from "../../Assets/Svg/aside-card1.svg";
import AsideImg2 from "../../Assets/Svg/aside-card2.svg";
import AsideImg3 from "../../Assets/Svg/aside-card3.svg";

export default function Aside() {
    return (
        <>
            <div className="aside">
                <div className="container">
                    <div className="aside-list">
                        <h2 className='aside-subtext'>
                            Milwaukee County Forms
                        </h2>
                        <p className='aside-text'>
                            Consulting Sessions
                        </p>
                        <div className="aside-card-box">
                            <div className="aside-card">
                                <img className='aside-card-img' src={AsideImg1} alt="Picture" />
                                <p className='aside-card-subtext'>Motions </p>
                                <p className='aside-card-text'>
                                    We are excited to assist you on your path to change an existing order regarding custody, placement, child support, and relocation to finally have your day in Court.
                                </p>
                            </div>
                            <div className="aside-card">
                                <img className='aside-card-img' src={AsideImg2} alt="Picture" />
                                <p className='aside-card-subtext'>Contempt  </p>
                                <p className='aside-card-text'>
                                    We are excited to assist you on your path to change an existing order regarding custody, placement, child support, and relocation to finally have your day in Court.
                                </p>
                            </div>
                            <div className="aside-card">
                                <img className='aside-card-img' src={AsideImg3} alt="Picture" />
                                <p className='aside-card-subtext'>Stipulation </p>
                                <p className='aside-card-text'>
                                    We are excited to assist you on your path to change an existing order regarding custody, placement, child support, and relocation to finally have your day in Court.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
