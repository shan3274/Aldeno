import { useFirebase } from "../../../Context/Firebase";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Productpage from "../Productpage/Productpage";
import Newinfo from "../Information/Newinfo";
import ProductMainPage from "../ProductFinal/ProductMainPage";
 


 const Dataproduct = () => {
    const firebase = useFirebase();
    const[userData,setUserData] = useState([]);
    const[username,setUsername] = useState([]);
    
    const {id} = useParams()
    useEffect(()=>{
        firebase.getList(id).then((user)=>{
          
          setUserData(user.docs)
        })
    },[]);
   
   return (
     <div>
      {
          userData.map((users,key)=><li><ProductMainPage {...users.data()}/></li>)
      }
     </div>
   )
 }
 
 export default Dataproduct