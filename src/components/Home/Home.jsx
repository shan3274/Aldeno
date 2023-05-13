import React from 'react'
import Header from '../header/Header';
import Imageshow from './ImageShow/Imageshow';
import Productmain from '../Product/Productmain';
import Text from './Text/Text';
import './Home.css';
import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from '../Product/Productpage/Productpage';
import Navbar from '../header/Navbar';
import Footer from '../Footer/Footer';
import Resell from '../Product/Resell/Resell';
import Show from '../Product/Resell/Show';
import Resellhome from '../Product/Resell/Resellhome';
import Dataproduct from '../Product/DataProduct/Dataproduct';
const Home = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home