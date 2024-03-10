import React from 'react'
import { useState ,useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/programs/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Students from './components/students/Students'
import Contact_us from './components/contact-us/Contact_us'
import Footer from './components/footer/Footer'

export const App = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      
      <Hero></Hero>
      <Students></Students>
      <div className='container'>
      <Title subTitle="Our Program" title="What we offer"></Title>
      <Program></Program>
      <About></About>
      <Title subTitle="Gallery" title="Campus Photos"></Title>
      <Campus></Campus>
      <Title subTitle="Students Say" title="What Students Say"></Title>
      <Students></Students>
      <Title subTitle="Contact us" title="Get in Touch"></Title>
      <Contact_us></Contact_us>
      <Footer></Footer>
      
      
      </div>
      

    </div>
  )
}

export default App