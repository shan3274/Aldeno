import React, { useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Show from './Show'

const Resellhome = () => {
    const[para,setPara]=useState('')
  return (
    <div>
        <Routes>
            <Route path='/user' element={<Show/>}/>
        </Routes>
        <input 
        value={para}
        onChange={(e)=>setPara(e.target.value)}
        type="text" /><br/>
        <Link to={'/user/'+para}>user details</Link>
    </div>
  )
}

export default Resellhome