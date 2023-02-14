import React from 'react'
import './Text.css';
import logo from './img/logo.png';
import cart from './img/cart.png';
import { Link } from 'react-router-dom';
import dribble from './img/dribble.png'
import telegram from './img/telegram.png'
import instagram from './img/instagram.png'


const Text = () => {
  return (
    <div>
        <div className="text-container">
            <div className="text-box">
                <p>I'M</p>
                <h1>ALDENO</h1>
                <h3>I HAVE UNIQUE PRODUCT IN FASHION INDUSTRY</h3>
                    <div className="row">
                        <Link to="#">Explore My Products</Link>
                        <Link to="#">Know More <span className='arrow-span'>&#x27F6;</span></Link> 
                        <span> You Can Explore More about us</span>
                    
                    </div>
                </div>
                <div className="social-icons">
                    <Link to='#'><img src={dribble} alt="" className='img1'/></Link>
                    <Link to='#'><img src={telegram} alt="" className='img2'/></Link>
                    <Link to='#'><img src={instagram} alt="" className='img3'/></Link>
                </div>
        </div>
    </div>
  )
}

export default Text