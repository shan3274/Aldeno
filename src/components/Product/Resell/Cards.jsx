import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../Context/Firebase';

const Cards = (props) => {

  const firebase = useFirebase();
  const [url,setUrl] = useState(null);

  useEffect(()=>{
    firebase.getImageURL(props.imageURl).then(urls=>setUrl(urls));
  },[]);
  return (
    <div>
      <img src={url} alt="" />
      <h1>{props.productid}</h1>
      <h1>{props.email}</h1>
      <h1>{props.productType}</h1>
        
        
    </div>
  )
}

export default Cards