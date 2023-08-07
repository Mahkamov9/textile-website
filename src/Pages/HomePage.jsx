import React from 'react'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import About from '../Components/About/About'
import Aside from '../Components/Aside/Aside'
import Article from '../Components/Article/Article'

export default function HomePage() {
  return (
    <>
      <Home/>
      <About/>
      <Aside/>
      <Article/>
    </>
  )
}
