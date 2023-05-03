import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import Navbar from '../../header/Navbar';
import Productheader from '../Productpage/Productheader';
import './Resellpage.css';

const Resellpage = () => {

    const firebase = useFirebase();
    const[images,setImage]=useState([]);
    const[productid,setProductid]=useState('');
    const[productType,setProductType]=useState('');
    const[email,setEmail]=useState('');

    const[types,setTypes]=useState('');

    const location = useLocation();
    
    useEffect(()=>{
        setProductid(location.state)
    },[]);
    const upload = ()=>{

        
        
        if(productid == null || productType == null || email == null ||images== null) return;
        firebase.resellData(productid,productType,email,images,types).then(()=>{
            alert("Request sent");
            setImage([]);
            setEmail('');
            setProductid('')
            setProductType('')
            setTypes('')
        });
        
    }
    console.log(types)
    
  return (
    <div>
        <Productheader/>
        <div className="main_container_resell">
       
            <div className="resell_container">
               
                <div className="image_container_resell">
                    
                    <label htmlFor="file">Image Upload +
                    
                    <input type="file" 
                   id='file' 
                   multiple
                   onChange={(e)=>setImage(e.target.files)}/>
                   </label>
                </div>
                <div className="text_container_resell">
                    <div className="label_container_resell">
                        <label>Product ID</label>
                    </div>
                    <div className="data_container_resell">
                        <input type="text" 
                        placeholder='Enter Your Prodecut id'
                        value={productid}
                        onChange={(e)=>setProductid(e.target.value)}
                        />
                    </div>
                    
                    <div className="label_container_resell">
                        <label>Product Type</label>
                    </div>
                    <div className="data_container_resell">
                        <input type="text" 
                        placeholder='Enter Your Prodecut Type'
                        value={productType}
                        onChange={(e)=>setProductType(e.target.value)}
                        />
                    </div>

                    <div className="label_container_resell">
                        <label>Email</label>
                    </div>
                    <div className="data_container_resell">
                        <input type="email" 
                        placeholder='Enter Your Mail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="label_container_resell">
                        <label>For</label>
                    </div>
                    <div className="data_container_resell">
                        <select value={types} onChange={(e)=>setTypes(e.target.value)}>
                            <option value="Resell">Resell</option>
                            <option value="Recycle">Recycle</option>
                        </select>
                    </div>
                    <div className="btn_resell">
                        <button onClick={upload}>{types!=''?types:"Resell"}</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Resellpage