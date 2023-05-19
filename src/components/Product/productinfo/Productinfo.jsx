import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';
import './Productinfo.css';
import recycle from './../img/recycle.png';

const Productinfo = (props) => {
    const[img,setImage]=useState({
        imageUrl1:props.imageUrl1,
    });
    
  return (
    <div className='Productinfo-main-container'>
        <div className="Productinfo-sub-container">
            <div className="slide slide1">
                <div className="heading-main">
                <div className="product-backgroud heading">
                    <h3>Product Background</h3>
                </div></div>
                <div className="details-sections pd">
                    <div className="gridpd">
                    <div className="sect1">
                        <div className="labless">
                            <p>Name</p>
                        </div>
                        <div className="datass">
                            <p>{props.productName}</p>
                        </div>
                        <div className="labless">
                            <p>Color</p>
                        </div>
                        <div className="datass">
                            <p>{props.color}</p>
                        </div>
                    </div>
                    <div className="sect2">
                        <div className="labless">
                            <p>Product ID</p>
                        </div>
                        <div className="datass">
                            <p>{props.productid}</p>
                        </div>
                        <div className="labless">
                            <p>Type</p>
                        </div>
                        <div className="datass">
                            <p>{props.type}</p>
                        </div>
                    </div>
                    </div>
                    <div className="datass">
                    <p><h5>Product Background</h5>{props.details}</p>
                    </div>
            </div>
                </div>
               
            <div className="slide slide2">
            <div className="heading-main">
                
            <div className="Sustainability heading">
                
            <h3>Sustainability</h3>
                </div></div>
                <div className="details-sections ss">
                   <p>
                    <div className="corbonfootprint">
                    <h4>{props.footprint}</h4><br/></div>
                    <span>{props.eimmision}</span> : kg CO2e of emissions avoided<br/>
                    <span>{props.water}</span> : litres of water saved<br/>
                    <span>{props.waste}</span> : grams of waste diverted<br/>
                    
                   </p>
                </div>
            </div>
            <div className="slide slide3">
            <div className="heading-main">
            <div className="Traceability heading">
                    <h3>Traceability</h3>
                </div></div>
                <div className="details-sections trac">
                    
                <div className="gridpd">
                    <div className="sect1">
                        <div className="labless">
                            <p>Fabric Supplier</p>
                        </div>
                        <div className="datass">
                            <p>{props.febricSupplier}</p>
                        </div>

                        <div className="labless">
                            <p>Sewing Thread</p>
                        </div>
                        <div className="datass">
                            <p>{props.sewingThread}</p>
                        </div>

                        <div className="labless">
                            <p>Label</p>
                        </div>
                        <div className="datass">
                            <p>{props.lable}</p>
                        </div>
                        <div className="labless">
                            <p>Manufacturing facility</p>
                        </div>
                        <div className="datass">
                            <p>{props.manufacility}</p>
                        </div>

                        <div className="labless">
                            <p>Maufactring country </p>
                        </div>
                        <div className="datass">
                            <p>{props.country}</p>
                        </div>
                      
                    </div>
                    <div className="sect2">
                       <div className="labless">
                            <p>Interlining</p>
                        </div>
                        <div className="datass">
                            <p>{props.interlining}</p>
                        </div>

                        <div className="labless">
                            <p>Embroidery Threads</p>
                        </div>
                        <div className="datass">
                            <p>{props.embroidery}</p>
                        </div>

                        <div className="labless">
                            <p>Buttons</p>
                        </div>
                        <div className="datass">
                            <p>{props.button}</p>
                        </div>

                        <div className="labless">
                            <p>Washcare</p>
                        </div>
                        <div className="datass">
                            <p>{props.washcare}</p>
                        </div>

                        <div className="labless">
                            <p>Country of Origin </p>
                        </div>
                        <div className="datass">
                            <p>{props.origin}</p>
                        </div>

                      
                    </div>
                    </div>
                    <div className="labless">
                            <p>Certifications</p>
                        </div>
                        <div className="datass">
                            <p>{props.certifications}</p>
                        </div>

                   
                <Link to='/trackingmain' state={props.productid}>event history</Link>

                </div>
                
            </div>
            
            <div className="slide slide4">
            <div className="heading-main">
            <div className="Resell-Recycle">
                    <h3> Resell & Recycle</h3>
                </div></div>
                <div className="details-sections rr">
                    
                    <div className="rsel">
                    <div className="hd">
                        <h5>Time to find your item a new home?</h5>
                        <p>Trade your item in for store credit</p>
                    </div>
                    <Link to='resellproduct'  state={props.productid}><button>Resell</button></Link>
                    </div>
                    <div className="rcyc">
                        <div className="hd">
                            <h5>Recycle your prodcut</h5>
                            <p>Send your product pieces back to us and be part of the circular revolution</p>
                        </div>
                        <div className="imgbox">
                            <img src={recycle} alt="" />
                        </div>
                            <div className="rrbtn"><button>Recycle</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Productinfo