import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import Tracking from './Tracking';

export const Main = () => {
    const location = useLocation();
    const firebase = useFirebase();
    const[userData,setUserData] = useState([]);

    useEffect(()=>{
        firebase.getList(location.state).then((user)=>{
          console.log(user.docs[0].data())
          setUserData(user.docs)
        })
    },[]);

  return (
    <div>
      {
          userData.map((users,key)=><li><Tracking {...users.data()}/></li>)
      }
     </div>
  )
}
