import React from 'react';
// import Navbar from '../Components/Navbar/Navbar';
import Footer from './Footer/Footer';


export default function Layout( {children} ) {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}
