import React from 'react'
import Header from '../header/Header';
import Imageshow from './ImageShow/Imageshow';
import Productmain from '../Product/Productmain';
import Text from './Text/Text';
import './Home.css';
import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from '../Product/Productpage/Productpage';
import Navbar from '../header/Navbar';
const Home = () => {
  return (
    <div>
     <Navbar/>
    </div>
  )
}

export default Home