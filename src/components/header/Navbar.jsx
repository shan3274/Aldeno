import React, { useState } from 'react'
import './Navbar.css';
import Productmain from '../Product/Productmain';
import { Link } from 'react-router-dom';
import Imageshow from '../Home/ImageShow/Imageshow';
import Text from '../Home/Text/Text';
import moon from './img/moon.png'
import sun from './img/sun.png'

const Navbar = () => {
    let btntext = document.getElementById('btntxt');
    const[visible,setvisible]=useState(true);
    const[darkmood,setdarkmood]=useState(moon);

    const dark = ()=>{
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            btntext.innerHTML = "Light";
            setdarkmood(sun)
        }else{
            btntext.innerHTML = "Dark";
            setdarkmood(moon)
        }

    }
  return (
    <div>
        
        <header>
        <nav>
            <ul className="nav-bar">
                <span className='logo-nav'>
                <li className="logo">
                    <Link to="/" className="logo-item">Aldeno</Link>
                </li>
                </span>
                <input type="checkbox" id="check"/>
                <span className="menu"> 
                    <li><Link to="productpage">Products</Link></li>
                    <li><Link to="/adminauth">Admin</Link></li>
                    <label for="check" class="close-menu" onClick={()=>{setvisible(true)}}>
                        <i className="fas fa-times"></i>
                    </label>
                </span>
                <label for="check" className="open-menu" onClick={()=>{setvisible(false)}}>
                    <i className="fas fa-bars" ></i>
                </label>
            </ul>
            <div className="toggle-btn" id='btn' onClick={dark}>
            <img src={darkmood} />
            </div>
        </nav>
        <div className="image-show">
            
        </div>
        
    </header>
    
    </div>
  )
}

export default Navbar