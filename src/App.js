import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Productpage from './components/Product/Productpage/Productpage';
import Productdetails from './components/Product/Productpage/Productdeatils';
import Productdetails2 from './components/Product/Productpage/Productdetails2';
import Text from './components/Home/Text/Text';
import Navbar from './components/header/Navbar';
function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productpage' element={<Productpage/>}/>
          <Route path='/productdetails' element={<Productdetails/>}/>

          <Route path='/productdetails2' element={<Productdetails2/>}/>
          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
