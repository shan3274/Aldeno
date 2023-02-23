import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase'
import ShowDetails from './ShowDetails';
import './Tracedetails.css';
const Tracedetails = () => {


    const firebase = useFirebase();

    const[details,setDetails]=useState([]);

    const id = useLocation()
    console.log(id)
    useEffect(()=>{
        firebase.getTrace(id.state).then((data)=>setDetails(data.docs));
     
    },[]);
    
  return (
    <div className='Main_container'>
        <div className="purchased_list">{details.length} purchases on this product</div>
        <div className="details_card">
        {
            details.map(users=><ShowDetails {...users.data()}/>)
        }
        </div>
    </div>
  )
}

export default Tracedetails