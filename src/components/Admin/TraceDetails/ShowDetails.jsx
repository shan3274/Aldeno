import React from 'react'
import './Showdetails.css';
const ShowDetails = (props) => {
  return (

    <>
      
      <div className="dot_"></div>
            <div className="text-boxx">
                <h3>{props.productid}<br/> </h3>
                Amount : {props.amount}<br/>
                Store Name : {props.storeName}<br/>
                Location : {props.location}<br/>
                Date Of Purchase : {props.date}<br/>
                <span className='left-container-arrow'></span>
      </div>

    </>

  )
}

export default ShowDetails