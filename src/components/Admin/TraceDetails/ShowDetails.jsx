import React from 'react'

const ShowDetails = (props) => {
  return (
    <div className='main_container_trace'>
        <div className="sub_constainer_trace">
            <h3>{props.productid}<br/> </h3>
            Amount : {props.amount}<br/>
            Store Name : {props.storeName}<br/>
            Location : {props.location}<br/>
            Date Of Purchase : {props.date}<br/>
            
        </div>
       
    </div>
  )
}

export default ShowDetails