import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase'
import Cards from './Cards';

const Show = () => {

    const firebase = useFirebase();
    const[userData,setUserData] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        firebase.getList(id).then((user)=>setUserData(user.docs))
    },[]);
  return (
    <div>
        {
            userData.map(users=><li><Cards {...users.data()}/></li>)
        }
    </div>
  )
}

export default Show