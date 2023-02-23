import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';

const Addproduct = () => {

    const firebase = useFirebase();
    const[images,setImage]=useState([]);
    const[productid,setProductid]=useState('');
    const[productType,setProductType]=useState('');
    const[email,setEmail]=useState('');
    
    const[size,setSize]=useState('');
    const[type,setType]=useState('');
    const[color,setColor]=useState('');
    const[details,setDetails]=useState('');

    
    const upload = ()=>{
        
        if(productid == null || productType == null || email == null ||images== null) return;
        firebase.addProduct(productid,size,type,color,details,images).then(()=>{
            alert("Product Added");
            setImage([]);
            setSize('');
            setType('');
            setColor('');
            setDetails('');
        });
        
    }
    
  return (
    <div>
        <div className="main_container_resell">
        <div className="header_container">
            <div className="Adleno_admin_header">
                <Link to='/adminhome'><h3>Aldeno <span>admin</span></h3></Link>
            </div>
            <div className="list">
                
                    <div >
                    <Link to='/addproduct'>Add Product</Link>
                    </div>
                    <div>
                    <Link to='/qrcode'>Link With QR</Link>
                    </div>
                    <div>
                    <Link to='/resellproduct'>Resell Request</Link>
                    </div>
                    
                
            </div>
        </div>
            <div className="resell_container">
                <div className="Title_addproduct">
                    <h3>Add your Product</h3>
                </div>
               
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
                        className='addpro'
                        placeholder='Enter Your Prodecut id'
                        value={productid}
                        onChange={(e)=>setProductid(e.target.value)}
                        />
                    </div>
                    
                    <div className="label_container_resell">
                        <label>Product Details</label>
                    </div>
                    <div className="data_container_resell">
                        <div className="details_con">
                            <input type="number" placeholder='size'
                            value={size}
                            onChange={(e)=>setSize(e.target.value)}
                            />
                            <input type="text" placeholder='type'
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            />
                            <input type="text" placeholder='color'
                            value={color}
                            onChange={(e)=>setColor(e.target.value)}
                            />
                            
                        </div>
                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Details'
                            value={details}
                            onChange={(e)=>setDetails(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    
                    <div className="btn_resell">
                        <button onClick={upload}>Add Product</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Addproduct