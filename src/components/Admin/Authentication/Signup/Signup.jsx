import React, { useState } from 'react'
import './Signup.css';
import{useFirebase} from '../../../../Context/Firebase'
const Signup = () => {

    const firebase = useFirebase();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signup = ()=>{
        firebase.signupUserWithEmailAndPassword(email,password).then(()=>{
            alert("done");
            setEmail('');
            setPassword('');
        });
    }
    
  return (
    <div className='main_Container'>
        <div className="sign_upcontainer">
        <div className="heading">
                <h1>SIGNUP</h1>
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
                <button onClick={signup}>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Signup