import React, { useState } from 'react';
import { useFirebase } from '../../../Context/Firebase';
import './Billing.css';
const Billing = () => {

    const firebase = useFirebase();


    const[productid,setproductid]=useState('');
    const[storeName,setStoreName]=useState('');
    const[location,setLocation]=useState('');
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');

    const billing = () => {
        firebase.Billing(productid,storeName,location,amount,date);
        firebase.Billing2(productid,storeName,location,amount,date);
    }
    
  return (
    <div className='Head_Container_bill'>
        <div className="sub_conatainer_bill">
            <div className="heading_bill">
                <p>Billing</p>
            </div>
            <div className="input_label_bill">
                <p>product ID</p>
            </div>
            <div className="input_bill">
                <input type="text" 
                value={productid}
                onChange={(e)=>setproductid(e.target.value)}
                />
            </div>

            <div className="input_label_bill">
                <p>Store Name</p>
            </div>
            <div className="input_bill">
                <input type="text" 
                value={storeName}
                onChange={(e)=>setStoreName(e.target.value)}
                />
            </div>

            <div className="input_label_bill">
                <p>Location</p>
            </div>
            <div className="input_bill">
                <input type="text" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                />
            </div>

            <div className="input_label_bill">
                <p>Amount</p>
            </div>
            <div className="input_bill">
                <input type="text" 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>

            <div className="input_label_bill">
                <p>Date of purchase</p>
            </div>
            <div className="input_bill">
                
                <input type="date" id='date'
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                />
                
            </div>
            <div className="bill_btn">
                <button onClick={billing}>Billing</button>
            </div>
        </div>
    </div>
  )
}

export default Billing