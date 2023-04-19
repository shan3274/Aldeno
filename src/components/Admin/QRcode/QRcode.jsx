import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './QRcode.css';

const QRcode = () => {
  const qrcode = ()=>{
    if(text == '') return;
     setUrl(' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text);
     setShow(true);
  }
  const[text,setText] = useState('');
  const[url,setUrl] = useState('');
  const[show,setShow] = useState(false);
  
  


  return (
    <div className="main_qr_container">

<div className="header_container">
            <div className="Adleno_admin_header">
            <Link to='/Billing'><h3>Aldeno <span>admin</span></h3></Link>
            </div>
            <div className="list">
                
                    <div >
                    <Link to='/addproduct'>Add Product</Link>
                    </div>
                    <div>
                    <Link to='/qrcode'>Link With QR</Link>
                    </div>
                    <div>
                    <Link to='/resellproduct'>Resell Request</Link>
                    </div>
                    <div>
                    <Link to='/Billing'>Billing</Link>
                    </div>
                    <div>
                    <Link to='/productpage'>Find Product</Link>
                    </div>
                    
                
            </div>
        </div>


    <div className='qr_container'>
      <p>Enter Your URl !</p>
      <input type="text" 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='insert your url'/>
      {show?
      <div id="imgBox">
        <a href={url} download='qr.png'>
        <img src={url} id='qrImage' />
        </a>
      </div>
      :''}
      <button onClick={qrcode}>Generate QR</button>
    </div>
    </div>
  )
}

export default QRcode