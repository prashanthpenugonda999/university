import React, { useEffect, useRef } from 'react'
import logo from "../../assets/logo4.png"
import "./Navbar.css"
import '../../index.css'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  let [sticky,setSticky]=useState(false)
 let hide_icon= useRef()
  let Hideicon=(e)=>{
    
    hide_icon.current.classList.toggle("hide-menu-icon")
    


  }
  let nav=document.getElementById("nav")
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);

    })
  },[])
  return (
    <>
    <nav id='nav' className={`container ${sticky ? "d-navbar":null}`}>
        <img src={logo} alt="" />
        <ul>
            <li ><a className='hoverr' href=""><Link to="hero" smooth={true} offset={0} duration={500} >Home</Link></a></li>
            <li><a className='hoverr'  href=""><Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link></a></li>
            <li><a className='hoverr' href=""><Link to="about" smooth={true} offset={-130} duration={500}>About Us</Link>  </a></li>
            <li><a className='hoverr' href=""><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link> </a></li>
            <li> <a  className="btn hoverr" href="contact-us"><Link to="" smooth={true} offset={-290} duration={500}>Contact Us</Link> </a></li>
        </ul>
        <i ref={hide_icon} onClick={Hideicon} class="fa-solid fa-bars menu-icon"></i>
    </nav>
    
    </>
  )
}

export default Navbar