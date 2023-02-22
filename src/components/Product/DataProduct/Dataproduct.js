import { useFirebase } from "../../../Context/Firebase";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Productpage from "../Productpage/Productpage";
 


 const Dataproduct = () => {
    const firebase = useFirebase();
    const[userData,setUserData] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        firebase.getList(id).then((user)=>setUserData(user.docs))
    },[]);

   return (
     <div>
      {
          userData.map(users=><li><Productpage {...users.data()}/></li>)
      }
     </div>
   )
 }
 
 export default Dataproduct