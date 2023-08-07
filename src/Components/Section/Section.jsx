import React from 'react';
import './Section.css';

import SectionImg from "../../Assets/Svg/footer-wave.svg";

export default function Section() {
  return (
    <>
        <div className="section">
            <img className='sectionwawe' src={SectionImg} alt="Picture" />
        </div>
    </>
  )
}
