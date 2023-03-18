import './App.css';
import { useEffect, useState } from "react";
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Productpage from './components/Product/Productpage/Productpage';
import Productdetails from './components/Product/Productpage/Productdeatils';
import Productdetails2 from './components/Product/Productpage/Productdetails2';
import Text from './components/Home/Text/Text';
import Navbar from './components/header/Navbar';
import Productmain from './components/Product/Productmain';
import { BarLoader} from 'react-spinners';
import Show from './components/Product/Resell/Show';
import Dataproduct from './components/Product/DataProduct/Dataproduct';
import Resellpage from './components/Product/Resell/Resellpage';
import Addproduct from './components/Product/Addproduct/Addproduct';
import QRcode from './components/Admin/QRcode/QRcode';
import Signup from './components/Admin/Authentication/Signup/Signup';
import Signin from './components/Admin/Authentication/Signin/Signin';
import Adminhome from './components/Admin/Adminhome/Adminhome';
import Billing from './components/Admin/Billing/Billing';
import Tracedetails from './components/Admin/TraceDetails/Tracedetails';
import Resellrequest from './components/Product/Resell/ResellRequest/Resellrequest';
import Ourservice from './components/Home/Ourservice/Ourservice';
import Productinfo from './components/Product/productinfo/Productinfo';
import Tracking from './components/Product/tracking/Tracking';
import { Main } from './components/Product/tracking/Main';
import MainDisplay from './components/Product/Information/Display/MainDisplay';
import Display from './components/Product/Information/Display/Display';



function App() {

  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000);
  },[]);
  return (
    <div>
      {loading?
      <div className='loadingscreen'>
      <BarLoader
      color={'white'}
      loading={loading}
      size={15}
      aria-label="BarLoader"
      data-testid="loader"
    /></div>
      :
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/productpage' element={<Productmain/>}/>
          <Route path='/productdetails' element={<Productdetails/>}/>
          <Route path='/productdetails2' element={<Productdetails2/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/resell' element={<Resellpage/>}/>
          <Route path='/product/:id/resellproduct' element={<Resellpage/>}/>
          <Route path='/resellproduct' element={<Resellrequest/>}/>
          <Route path='/product/:id' element={<Dataproduct/>}/>
          <Route path='/qrcode' element={<QRcode/>}/>
          <Route path='/adminhome' element={<Adminhome/>}/>
          <Route path='/adminauth' element={<Signin/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/trackingmain' element={<Main/>}/>
          <Route path='/displaydata' element={<MainDisplay/>}/>
          <Route path='/displaydata' element={<Display/>}/>
          <Route path='/root3274' element={<Signup/>}/>
          <Route path='/Billing' element={<Billing/>}/>
          <Route path='/tracedetails' element={<Tracedetails/>}/>
        </Routes>
    </Router>}
    </div>
  );
}

export default App;
