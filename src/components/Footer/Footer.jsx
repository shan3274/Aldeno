import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AiFillFacebook, 
    AiFillInstagram, 
    AiFillTwitterSquare, 
    AiFillYoutube, 
    AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer-component">
                <div className="social-icon-footer">
                    <div className="icon-in-footer">
                       <AiFillInstagram size="1.5rem"/>
                        
                    </div>
                    <div className="icon-in-footer">
                        <AiFillFacebook   size="1.5rem"/>
                    </div>
                    <div className="icon-in-footer">
                        <AiFillTwitterSquare size="1.5rem"/>
                    </div>
                    <div className="icon-in-footer">
                        <AiFillYoutube size="1.5rem"/>
                    </div>
                </div>
                <div className="copyrite-footer">
                    <p>COPYRIGHT <span ><AiOutlineCopyrightCircle/></span></p>
                </div>
                
            </div>
        </footer>
       
    </div>
  )
}

export default Footer