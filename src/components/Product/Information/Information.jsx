import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import Footer from '../../Footer/Footer';
import './Information.css';
const Information = (props) => {


  return (
    <div>
        <div className="details">
        <ul className="accordion">
            <li>
                <input type="radio" name='accordion' id='first'/>
                <label htmlFor="first" className='label'>Products</label>
                <div className="content">
                    <p>
                        Name : {props.productid}<br/>
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
                <label htmlFor="third" className='label'> Reali-time Tracking</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!<Link to='/tracedetails' state={props.productid}>Track</Link>
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='fourth'/>
                <label htmlFor="fourth" className='label'>Resell</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!
                        <Link to='resellproduct'  state={props.productid}>Resell</Link>
                    </p>
                </div>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default Information
