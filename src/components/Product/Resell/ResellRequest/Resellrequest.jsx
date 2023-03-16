import React, { useEffect, useState } from 'react';
import { useFirebase } from '../../../../Context/Firebase';
import './Resellrequest.css';
import Showreselldata from './Showreselldata';
import './Resellrequest.css';
import Adminhome from '../../../Admin/Adminhome/Adminhome';

const Resellrequest = () => {
  const firebase = useFirebase();

    const[details,setDetails]=useState([]);
    useEffect(()=>{
        firebase.getRequest('Resell/2UHVmRt1JSAGgM0oUeil/products').then((data)=>{
          setDetails(data.docs);
          
        });
    },[]);
  return (
    <div className='resellrequest_main'>
      <Adminhome/>
      <div className="no_request"><h2>{details.length} Request found</h2></div>
        <div className="resllrequest_submain">
        {
            details.map((users,key)=><Showreselldata {...users.data()}/>)
        }
        </div>
    </div>
  )
}

export default Resellrequest