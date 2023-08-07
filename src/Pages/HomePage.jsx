import React from 'react'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import About from '../Components/About/About'
import Aside from '../Components/Aside/Aside'
import Article from '../Components/Article/Article'
import Section from '../Components/Section/Section'

export default function HomePage() {
  return (
    <>
      <Home/>
      <About/>
      <Aside/>
      <Article/>
      <Section/>
    </>
  )
}
