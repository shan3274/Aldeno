import React from 'react'
import { Link } from 'react-router-dom'
import './Adminhome.css'
const Adminhome = () => {
  return (
    <div className='adminhome_container'>

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
        
    </div>
  )
}

export default Adminhome