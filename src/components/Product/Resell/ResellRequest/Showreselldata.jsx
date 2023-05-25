import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../../Context/Firebase'

const Showreselldata = (props) => {
    const firebase = useFirebase();

    const[url1,setUrl1]=useState(null);
    const[url2,setUrl2]=useState(null);
    const[url3,setUrl3]=useState(null);
    const[url4,setUrl4]=useState(null);
   
    useEffect(()=>{
    firebase.getImageURL(props.imageURl1).then(urls=>setUrl1(urls));
    firebase.getImageURL(props.imageURl2).then(urls=>setUrl2(urls));
    firebase.getImageURL(props.imageURl3).then(urls=>setUrl3(urls));
    firebase.getImageURL(props.imageURl4).then(urls=>setUrl4(urls));
    },[]);
  
    console.log(props.getImageURL1)
    
  return (
    <div className='main_show_constainer'>
      <div className="sub_show_container">
      <div className="details_container">
         
          <div className="pid">
            <h3>Product ID : {props.productid}</h3>
          </div>
         
        </div>
        <div className="img_div">
            <div className="img_show">
            <img src={url1} alt="" />
            </div>
            <div className="img_show">
            <img src={url2} alt="" />
            </div>
            <div className="img_show">
            <img src={url3} alt="" />
            </div>
            <div className="img_show">
            <img src={url3} alt="" />
            </div>
        </div>
        <div className="details_container">
          <div className="">
            <p>Customer mail : {props.email}</p>
          </div>
          
          <div className="">
            <p>Product Type : {props.productType}</p>
          </div>
          <div className="">
            <p>For : {props.types}</p>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Showreselldata