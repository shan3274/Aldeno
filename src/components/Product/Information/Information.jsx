import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import Footer from '../../Footer/Footer';
import './Information.css';
const Information = (props) => {

    // console.log(props)
  return (
    <div>
        <div className="details">
        <ul className="accordion">
            <li>
                <input type="radio" name='accordion' id='first'/>
                <label htmlFor="first" className='label'>Products</label>
                <div className="content">
                    <p>
                        Name : {props.productName}<br/>
                        Size : {props.size}<br/>
                        Color : {props.color}<br/>
                        Type : {props.type}
                        
                        
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='second'/>
                <label htmlFor="second" className='label'>Information</label>
                <div className="content">
                    <p>
                        {props.details}
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='third'/>
                <label htmlFor="third" className='label'>Real-time Tracking</label>
                <div className="content">
                    <p>
                        The tracking method that makes use of product cloud to determine the complete product history  in time 
                        ! <Link to='/tracedetails' state={props.productid}>Track this product</Link>
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='fourth'/>
                <label htmlFor="fourth" className='label'>Resell or Recycle</label>
                <div className="content">
                    <p>
                    You can resell your product easily just send us a request. 
                     <Link to='resellproduct'  state={props.productid}>Resell request</Link><br/>
                    You can also recycle your product 
                        
                    </p>
                </div>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default Information