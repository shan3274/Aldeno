import React, { useState } from 'react';
import Navbar from '../../header/Navbar';
import './Productpage.css';
const Productdeatils = () => {

  const[deatils,setdetails]=useState(true);
  const[recycle,setrecycle]=useState(false);
  const[qrcode,setqrcode]=useState(false);
  
  return (
    <div>
     <div className="container">

          <div className="head-container">
              
              <div className="title-details">
                  <h2>Denim Jacket</h2>
              </div>
            <div className="type-container ">
                <div className="details-btn com com-cont-btn"
                onClick={
                  ()=>{
                    setdetails(true);
                    setrecycle(false);
                    setqrcode(false);
                  }
              }>Traceability</div>
              <div className="recycle-btn com com-cont-btn"
                onClick={
                  ()=>{
                    setdetails(false);
                    setrecycle(true);
                    setqrcode(false);
                  }
              }>OWNERSHIP CERTIFICATE
              
              
              </div>
              <div className="qr-btn com com-cont-btn"
                onClick={
                  ()=>{
                    setdetails(false);
                    setrecycle(false);
                    setqrcode(true);
                  }
              }>CARE & REPAIR</div>
              <div className="qr-btn com com-cont-btn"
                onClick={
                  ()=>{
                    setdetails(false);
                    setrecycle(false);
                    setqrcode(true);
                  }
              }>SUSTAINABLITY</div>
            </div>


          </div>
            
          
          
         
    </div>
    <div className="details-container">
        {deatils?
        <div className="details">
          <p>Details <br/>this is details preview</p>
        </div>:''}
        {recycle?
        <div className="recycle">
          <p>Recycle <br/>this is recycle preview </p>
        </div>:''}
        {qrcode?
        <div className="qrcode">
          <p>Qrcode <br/>this is qrcode preview</p>
        </div>:''}
     </div> 
    </div>
    
  )
}

export default Productdeatils