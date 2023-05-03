import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Productheader.css';
const Productheader = () => {
    const[visible,setvisible]=useState(true)
    return (
      <div>
          
        <header>
          <nav className='title-logo'>
             
                <h1 className='logo-nav'>Aldeno</h1>
          </nav>
          
        </header>
      
      </div>
    )
}

export default Productheader