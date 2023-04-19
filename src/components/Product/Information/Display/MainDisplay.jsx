import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFirebase } from '../../../../Context/Firebase';
import Display from './Display';

const MainDisplay = () => {
    const id = useLocation()
    const myarr = id.state.split(' ');
    const firebase = useFirebase();
    const[userData,setUserData] = useState([]);
   
    useEffect(()=>{
        firebase.getList(myarr[myarr.length-1]).then((user)=>{
            setUserData(user.docs);
        })
    },[]);
    
  return (
    <div>
        
        {
          userData.map((users,key)=><li><Display {...users.data()}/></li>)
      }
   </div>
  )
}

export default MainDisplay