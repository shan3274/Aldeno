import React, { useEffect, useState } from 'react';
import './Productpage.css';
import { Link, Route, Routes } from 'react-router-dom';

import Productheader from './Productheader';
import Information from '../Information/Information';
import Footer from '../../Footer/Footer';
import { useFirebase } from '../../../Context/Firebase';

import {} from '../DataProduct/Dataproduct'
import Productinfo from '../productinfo/Productinfo';
const Productpage = (props) => {
  
  const firebase = useFirebase();

  const[url1,setUrl1]=useState(null);
  const[url2,setUrl2]=useState(null);
  const[url3,setUrl3]=useState(null);
  const[url4,setUrl4]=useState(null);
  

  useEffect(()=>{
    firebase.getImageURL(props.imageUrl1).then(urls=>setUrl1(urls));
    firebase.getImageURL(props.imageUrl2).then(urls=>setUrl2(urls));
    firebase.getImageURL(props.imageUrl3).then(urls=>setUrl3(urls));
    firebase.getImageURL(props.imageUrl4).then(urls=>setUrl4(urls));
  },[])
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
    const[info,setInfor]=useState({
      details:props.details,
      product:props.product,
      productid:props.productid,
      productName:props.productName,
      size:props.size,
      color:props.color,
      type:props.type,
      imageUrl1:props.imageUrl1,
      footprint:props.footprint,
      eimmision:props.eimmision,
      water:props.water,
      waste:props.waste,
      fibric:props.fibric,
      manufacturere:props.manufacturere,
      city:props.city,
      parentOrg:props.parentOrg,
      gender:props.gender,
      percentage:props.percentage,
      trim:props.trim,
      swing:props.swing,
      bodyFebric:props.bodyFebric,
      febricSupplier:props.febricSupplier,
      interlining:props.interlining,
      sewingThread:props.sewingThread,
      embroidery:props.embroidery,
      lable:props.lable,
      button:props.button,
      washcare:props.washcare,
      certifications:props.certifications,
      manufacility:props.manufacility,
      country:props.country,
      origin:props.origin,
      price:props.price,
      sizeSystem:props.sizeSystem,
      releaseDate:props.releaseDate,
    });
    
  return (
    <div>
    
    <div class = "card-wrapper">
    <div class = "card">
      <div class = "product-imgs">
        <div class = "img-display">
          <div class = "img-showcase">
            <img src = {url1} className='img-div'/>
            <img src = {url2} className='img-div' />
            <img src = {url3} className='img-div'/>
            <img src = {url4} className='img-div'/>
          </div>
        </div>
        <div class = "img-select">
          <div class = "img-item" onClick={handle}>
            <Link to = "#" data-id = "1" >
              <img src = {url1}/>
            </Link>
          </div>
          <div class = "img-item" onClick={handle}>
            <Link to = "" data-id = "2" >
              <img src = {url2}  />
            </Link>
          </div>
          <div class = "img-item" onClick={handle}>
            <Link to = "#" data-id = "3">
              <img src = {url3} />
            </Link>
          </div>
          <div class = "img-item" onClick={handle}>
            <Link to = "#" data-id = "4">
              <img src = {url4} />
            </Link>
          </div>
        </div>
      </div> 
      {/* <Information{...info}/> */}
      <Productinfo {...info}/>
    </div>
  </div>
  <Productheader/>
  <div className="footer-product">
      <Footer/>
  </div>
  
</div>
  )
}

export default Productpage