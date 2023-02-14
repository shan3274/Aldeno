import React from 'react'
import './Imageshow.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

const Imageshow = () => {
  return (
    <div>
         <div className="container">
            <div className="gallery">
                <div className="img-box">
                    <h3>Product name</h3>
                </div>
                <div className="img-box">
                    <h3>Product name</h3>
                </div>
                <div className="img-box">
                    <h3>Product name</h3>
                </div>
                <div className="img-box">
                    <h3>Product name</h3>
                </div>
                
            </div>
         </div>
    </div>
  )
}

export default Imageshow