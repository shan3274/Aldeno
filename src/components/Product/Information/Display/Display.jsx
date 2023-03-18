import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'
import { useFirebase } from '../../../../Context/Firebase';
import recycle from '../../img/recycle.png';

const Display = (props) => {
    const id = useLocation()
    const myarr = id.state.split(' ');

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



    if(myarr[0] == 'Product'){
        return (
            <div>
             {/* <div className="sect2 scroll s2">
            <div className="imgsce">
                    <img src={url3} />
                </div>
                <div className="detailssec firstd sus">
                    <h4>Product Background</h4>
                    <p>Swap down <AiOutlineArrowDown/></p>
                </div>
            </div> */}
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url3} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="Traceability heading">
                    <h3>Product Background</h3>
                </div></div>
                <div className="details-sections trac">
                
                        <div className="datass">
                            <div className="det"><p>{props.details}</p></div>
                        </div>
                <div className="gridpd">
                <div className="sect1">
                        <div className="labless">
                            <p>Product Name</p>
                        </div>
                        <div className="datass">
                            <p>{props.productName}</p>
                        </div>
                        <div className="labless">
                            <p>Parent Organization</p>
                        </div>
                        <div className="datass">
                            <p>{props.parentOrg}</p>
                        </div>
                        <div className="labless">
                            <p>Brand</p>
                        </div>
                        <div className="datass">
                            <p>{props.manufacturere}</p>
                        </div>

                        <div className="labless">
                            <p>Size</p>
                        </div>
                        <div className="datass">
                            <p>{props.size}</p>
                        </div>
                    </div>
                    <div className="sect2">
                        <div className="labless">
                            <p>Style ID</p>
                        </div>
                        <div className="datass">
                            <p>{props.productid}</p>
                        </div>
                        <div className="labless">
                            <p>MRP</p>
                        </div>
                        <div className="datass">
                            <p>{props.price}</p>
                        </div>

                        <div className="labless">
                            <p>Country code for size </p>
                        </div>
                        <div className="datass">
                            <p>{props.sizeSystem}</p>
                        </div>
                        <div className="labless">
                            <p>Body Febrics </p>
                        </div>
                        <div className="datass">
                            <p>{props.fibric}</p>
                        </div>
                    </div>
                    </div>
                   

                   
                        
                   
                    
                </div>
                
            </div>


                </div>
            </div>
                
            </div>
          )
    }
    else if(myarr[0] == 'Traceability'){
        return (
            <div>
            {/* <div className="sect1 scroll ss1">
            <div className="imgsce">
                    <img src={url2} />
                </div>
                <div className="detailssec firstd ssd">
                    <h4>Traceability</h4>
                    <p>Swap down <AiOutlineArrowDown/></p>
                </div>
            </div> */}
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url2} />
                </div>
                <div className="detailssec">
                    

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


                </div>
            </div>
                
            </div>
          )
    }
    else if(myarr[0] == 'Sustainability'){
        return (
            <div>
            {/* <div className="sect2 scroll s2">
            <div className="imgsce">
                    <img src={url4} />
                </div>
                <div className="detailssec firstd suss">
                    <h4>Sustainability</h4>
                    <p>Swap down <AiOutlineArrowDown/></p>
                </div>
            </div> */}
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url4} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="Traceability heading">
                    <h3>Sustainability</h3>
                </div></div>
                <div className="details-sections trac">
                    <div className="det">
                   <p>
                    <div className="corbonfootprint">
                    <h4>{props.footprint}</h4><br/></div>
                    <span>{props.eimmision}</span> : kg CO2e of emissions avoided<br/>
                    <span>{props.water}</span> : litres of water saved<br/>
                    <span>{props.waste}</span> : grams of waste diverted<br/>
                    
                   </p></div>
                </div>
                
            </div>


                </div>
            </div>
                
            </div>
          )
    }
  else {return (
    <div>
        {/* <div className="sect2 scroll s2">
            <div className="imgsce re">
                    <img src={recycle} />
                </div>
                <div className="detailssec firstd rrs">
                    <h4>Resell & Recycle</h4>
                    <p>Swap down <AiOutlineArrowDown/></p>
                </div>
            </div> */}
            <div className="sect1 scroll ss">
            <div className="imgsce re">
                    <img src={recycle} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="Traceability heading">
                    <h3>Resell & Recycle</h3>
                </div></div>
                <div className="details-sections trac rr">
                <div className="rsel">
                    <div className="hd">
                        <h5>Time to find your item a new home?</h5>
                        <p>Trade your item in for store credit</p>
                    </div>
                    <Link to='/resell'  state={props.productid}><button>Resell</button></Link>
                    </div>
                    <div className="rcyc">
                        <div className="hd">
                            <h5>Recycle your prodcut</h5>
                            <p>Send your product pieces back to us and be part of the circular revolution</p>
                        </div>
                      
                            <div className="rrbtn"><button>Recycle</button>
                        </div>
                    </div>
                </div>
                
            </div>


                </div>
            </div>
        
    </div>
  )}
}

export default Display