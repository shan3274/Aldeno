import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import './Tracking.css';
import ShowDetails from '../../Admin/TraceDetails/ShowDetails';
const Tracking = (props) => {
    const location = useLocation();
    const firebase = useFirebase();
    const[url1,setUrl1]=useState(null);
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        firebase.getImageURL(props.imageUrl1).then(urls=>setUrl1(urls));
        firebase.getTrace(props.productid).then((data)=>setDetails(data.docs));
      },[])



    const id = useLocation()
    console.log(id)
    


  return (
    <div className='Main-img-container'>
        <div className="heading-title">
            <h4>Traceablity</h4>
        </div>
      <div className="sub-image-container">
        <div className="text-img-container">
            <div className="heading-cont">
                <h6>Digital ID</h6>
            </div>
            <div className="gridpd t">
                    <div className="sect1 ts1">
                        <div className="labless">
                            <p>Product Name</p>
                        </div>
                        <div className="datass">
                            <p>{props.productName}</p>
                        </div>
                        <div className="labless">
                            <p>Size System</p>
                        </div>
                        <div className="datass">
                            <p>{props.sizeSystem}</p>
                        </div>

                        <div className="labless">
                            <p>Release Date</p>
                        </div>
                        <div className="datass">
                            <p>{props.releaseDate}</p>
                        </div>
                        <div className="labless">
                            <p>Price</p>
                        </div>
                        <div className="datass">
                            <p>{props.price}</p>
                        </div>
                    </div>


                    <div className="sect2 ts1">
                        <div className="labless">
                            <p>Brand/Label</p>
                        </div>
                        <div className="datass">
                            <p>{props.manufacturere}</p>
                        </div>
                        <div className="labless">
                            <p>Color</p>
                        </div>
                        <div className="datass">
                            <p>{props.color}</p>
                        </div>

                        <div className="labless">
                            <p>Size</p>
                        </div>
                        <div className="datass">
                            <p>{props.size}</p>
                        </div>
                    </div>
                    </div>
        </div>
        <div className="text-img-container eh">
        <div className="heading-cont">
                <h6>Event history</h6>
                
        </div>
        <div className="detailssec">
        <p>{details.length} purchases made on this product

        
        ! <Link to='/tracedetails' state={props.productid}>Track this product</Link></p>
        </div>
        </div>
        <div className="img-img-container">
            <img src={url1} />
        </div>
        
      </div>
    </div>
  )
}

export default Tracking