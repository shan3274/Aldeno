import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { DiAptana} from "react-icons/di";
import {BiHomeAlt} from 'react-icons/bi';
import {IoMdContact} from 'react-icons/io'
const Header = () => {

     
    const change = ()=>{
        const hamBurger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        
        hamBurger.addEventListener("click",()=>{
            hamBurger.classList.toggle("active")
            navMenu.classList.toggle("active")
        });
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
            hamBurger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
  return (
    <header className='header-div'>
        <nav className='navbar'>
            <Link to="#" className='link nav-branding'>Aldeno</Link>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/" className='link nav-link'><span className='icon-div'><BiHomeAlt/> </span> Home</Link>
                </li>
                <li className="nav-item" >
                    <Link to="#" className='link nav-link'><span className='icon-div'><DiAptana/> </span>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className='link nav-link'><span className='icon-div'><IoMdContact/> </span>Contact</Link>
                </li>
                <li className="nav-item ">
                    <Link to="#" className='link nav-link'><span className='icon-div'><DiAptana/> </span>Account</Link>
                </li>
                
            </ul> 
            <div className="hamburger" onClick={change}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
  )
}

export default Header