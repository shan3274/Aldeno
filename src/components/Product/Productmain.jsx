import React, { useState } from 'react';
import './Productmain.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Information from './Information/Information';
import Productpage from './Productpage/Productpage';
import Footer from '../Footer/Footer';
import Productheader from './Productpage/Productheader';
const Productmain = () => {
  const[id,setId]=useState('');
  return (
    <div className='main_container'>
      <Productheader/>
      <div className="product_container">
        <div className="product_label">
          <h4>Search your product by ID</h4>
        </div>
        <div className="product_input">
          <input type="text" 
          value={id}
          onChange={(e)=>setId(e.target.value)}
          placeholder='enter your product ID'
          />
          <div className="product_search_btn">
            <Link to={'/product/'+id}>Search</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productmain