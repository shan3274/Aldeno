import React, { useState } from 'react';
import './Productpage.css';
import logo from './img/logo.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import {AiOutlineShopping} from 'react-icons/ai';
import checked from './shoes_images/checked.png';
import shoe_1 from './shoes_images/shoe_1.jpg';
import shoe_2 from './shoes_images/shoe_2.jpg';
import shoe_3 from './shoes_images/shoe_3.jpg';
import shoe_4 from './shoes_images/shoe_4.jpg';
import Productdeatils from './Productdeatils';
import Productdetails2 from './Productdetails2';
import { Route, Routes } from 'react-router-dom';
import Header from '../../header/Header';
const Productpage = () => {
  const handle = ()=>{
    const imgs = document.querySelectorAll('.img-select a');
          const imgBtns = [...imgs];
          let imgId = 1;

          imgBtns.forEach((imgItem) => {
              imgItem.addEventListener('click', (event) => {
                  event.preventDefault();
                  imgId = imgItem.dataset.id;
                  slideImage();
              });
          });

          function slideImage(){
              const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

              document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
          }

          window.addEventListener('resize', slideImage);
    }
    const[hold,changehold]=useState(true);
    const[hold2,changehold2]=useState(false);
  
    const changestate =()=>{
      changehold(false);
      changehold2(true)
    }
    const changestate2 =()=>{
      changehold2(false);
      changehold(true)
    }
  return (
    <div>
    <div class = "card-wrapper">
    <div class = "card">
      <div class = "product-imgs">
        <div class = "img-display">
          <div class = "img-showcase">
            <img src = {shoe_1} alt = "shoe image" className='img-div'/>
            <img src = {shoe_2} alt = "shoe image" className='img-div' />
            <img src = {shoe_3} alt = "shoe image" className='img-div'/>
            <img src = {shoe_4} alt = "shoe image" className='img-div'/>
          </div>
        </div>
        <div class = "img-select">
          <div class = "img-item" onClick={handle}>
            <a href = "#" data-id = "1" onClick={changestate2}>
              <img src = {shoe_1} alt = "shoe image"/>
            </a>
          </div>
          <div class = "img-item" onClick={handle}>
            <a href = "" data-id = "2"  onClick={changestate}>
              <img src = {shoe_2} alt = "shoe image" />
            </a>
          </div>
          <div class = "img-item" onClick={handle}>
            <a href = "#" data-id = "3">
              <img src = {shoe_3} alt = "shoe image"/>
            </a>
          </div>
          <div class = "img-item" onClick={handle}>
            <a href = "#" data-id = "4">
              <img src = {shoe_4} alt = "shoe image"/>
            </a>
          </div>
        </div>
      </div> 
      {hold?<Productdeatils/>:''}
      {hold2?<Productdetails2/>:''}
    </div>
  </div>

</div>
  )
}

export default Productpage