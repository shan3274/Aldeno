import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Imageshow from '../Home/ImageShow/Imageshow';
import Ourservice from '../Home/Ourservice/Ourservice';
import Text from '../Home/Text/Text';
import './Header.css'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div>
      <Imageshow/>
      <Text/> 
      <Ourservice/>
      {/* <Contact/> */}
      <Footer/>
      <Navbar/>
       
    </div>
  )
}

export default Header