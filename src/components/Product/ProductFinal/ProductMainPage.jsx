import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useFirebase } from '../../../Context/Firebase';
import './Style.css';
import { Link } from 'react-router-dom';
import logomain from '../img/logo_aldeno.jpg';

const ProductMainPage = (props) => {

    const firebase = useFirebase();

    const[url1,setUrl1]=useState(null);
    const[url2,setUrl2]=useState(null);
    const[url3,setUrl3]=useState(null);
    const[url4,setUrl4]=useState(null);
    
  
    useEffect(()=>{
      firebase.getImageURL(props.imageUrl1).then(urls=>setUrl1(urls));
      firebase.getImageURL(props.imageUrl2).then(urls=>setUrl2(urls));
      firebase.getImageURL(props.imageUrl3).then(urls=>setUrl3(urls));
      firebase.getImageURL(props.imageUrl4).then(urls=>setUrl4(urls));
    },[])

  return (
    <div className='Main-pro-container'>
        <div className="sub-pro-container">
            <div className="headingfinalprodyct">
                <img src={logomain} alt="" />
            </div>
            <div className="sect scroll">
                    <div className="imgsce">
                        <img src={url1} />
                    </div>
                    <div className="detailssec firstd">
                        <h4>Welcome to your garment's <br/> Digital ID</h4>
                        <p>Swipe UP <AiOutlineArrowUp/></p>
                    </div>
            </div>
            <div className="basicdetails scroll">
                <div className="detailsection">
                    <div className="sectone">
                        <div className="titlepro">
                            <h3>Product Details</h3>
                        </div>
                        <div className="dete">
                            <p>{props.Basicdetails}</p></div>
                        </div>
                        <div className="btns">
                            <div className="btnopt">
                                <Link><button>Product Background +</button></Link>
                            </div>
                        </div>
                        <div className="btns">
                            <div className="btnopt">
                                <Link to='/displaydata' state={'Product Background '+props.productid}><button>Product Background +</button></Link>
                            </div>
                            <div className="btnopt">
                                <Link to='/displaydata' state={'Traceability '+props.productid}><button>Traceability +</button></Link>                      
                            </div>
                            <div className="btnopt">
                                <Link to='/displaydata' state={'Sustainability '+props.productid}><button>Sustainability +</button></Link>                         
                            </div>
                            <div className="btnopt">
                                <Link to='/displaydata' state={'Resell & Recycle '+props.productid}><button>Resell & Recycle +</button></Link>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductMainPage