import React, { useState } from 'react'
import './Navbar.css';
import Productmain from '../Product/Productmain';
import { Link } from 'react-router-dom';
import Imageshow from '../Home/ImageShow/Imageshow';
import Text from '../Home/Text/Text';

const Navbar = () => {
    const[visible,setvisible]=useState(true)
  return (
    <div>
        <Imageshow/>
        <Text/>
        <header>
        <nav>
            <ul className="nav-bar">
                <span className=''></span>
                <li className="logo">
                    <a href="#" className="logo-item">Aldeno</a>
                </li>
                <input type="checkbox" id="check"/>
                <span className="menu">
                    <li><Link to="productpage">Home</Link></li>
                    <li><Link to="#">Products</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <label for="check" class="close-menu" onClick={()=>{setvisible(true)}}>
                        <i className="fas fa-times"></i>
                    </label>
                </span>
                <label for="check" className="open-menu" onClick={()=>{setvisible(false)}}>
                    <i className="fas fa-bars" ></i>
                </label>
            </ul>
        </nav>
        <div className="image-show">
            {/* {visible?<Imageshow/>:''} */}
            
        </div>
        
    </header>
    
    </div>
  )
}

export default Navbar