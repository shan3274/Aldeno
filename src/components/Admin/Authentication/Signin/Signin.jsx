import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../../../../Context/Firebase';
import './Signin.css';
const Signin = () => {
    const firebase = useFirebase();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[errorlog,setErrorlog]=useState('');

    const navigate = useNavigate();
    const login = ()=>{
        if(email == '' || password == ''){
            setErrorlog('Fill the details');
            return;
        }
        firebase.loginUser(email,password)
        .then(()=>{
            navigate('/Billing');
        })
        .catch(err => setErrorlog('wrong details'));
    }
  return (
    <div className='main_Container'>
        <div className="sign_upcontainer signin">
            <div className="heading">
                <h2><span className='admin-txt'>ADMIN </span>SIGNIN</h2>
            </div>
            <div className="input">
                <input type="email" 
                placeholder='Enter your email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="input">
                <input type="password" 
                placeholder='Enter your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="input">
                <button onClick={login}>Signin</button>
            </div>
           
        </div>
        
    </div>
  )
}

export default Signin