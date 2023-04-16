import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'
import { useFirebase } from '../../../../Context/Firebase';
import recycle from '../../img/recycle.png';
import logos from '../../img/logos.png';
import footprintlogo from '../../img/footprintlogo.png';
import './Display.css';
import logomain from '../../img/logo_aldeno.jpg';

const Display = (props) => {
    const id = useLocation()
    const myarr = id.state.split(' ');

    const firebase = useFirebase();

    const[url1,setUrl1]=useState(null);
    const[url2,setUrl2]=useState(null);
    const[url3,setUrl3]=useState(null);
    const[url4,setUrl4]=useState(null);

    const[febricSupplierimg,setfebricSupplier]=useState(null);
    const febricSupplierarr = props.febricSupplier.split(' ');

    const[sewingThreadimg,setsewingThread]=useState(null);
    const sewingThreadarr = props.sewingThread.split(' ');

    const[lableimg,setlable]=useState(null);
    const lablearr = props.lable.split(' ');

    const[interliningimg,setinterlining]=useState(null);
    const interliningarr = props.interlining.split(' ');

    const[embroideryimg,setembroidery]=useState(null);
    const embroideryarr = props.embroidery.split(' ');

    const[buttonimg,setbutton]=useState(null);
    const buttonarr = props.button.split(' ');

    const[washcareimg,setwashcare]=useState(null);
    const washcarearr = props.washcare.split(' ');


    useEffect(()=>{
      firebase.getImageURL(props.imageUrl1).then(urls=>setUrl1(urls));
      firebase.getImageURL(props.imageUrl2).then(urls=>setUrl2(urls));
      firebase.getImageURL(props.imageUrl3).then(urls=>setUrl3(urls));
      firebase.getImageURL(props.imageUrl4).then(urls=>setUrl4(urls));
      firebase.getImageURL(`Logo/pictures/${febricSupplierarr[0]}.png`).then(urls=>setfebricSupplier(urls));
      firebase.getImageURL(`Logo/pictures/${sewingThreadarr[0]}.png`).then(urls=>setsewingThread(urls));
      firebase.getImageURL(`Logo/pictures/${lablearr[0]}.png`).then(urls=>setlable(urls));
      firebase.getImageURL(`Logo/pictures/${interliningarr[0]}.png`).then(urls=>setinterlining(urls));
      firebase.getImageURL(`Logo/pictures/${embroideryarr[0]}.png`).then(urls=>setembroidery(urls));
      firebase.getImageURL(`Logo/pictures/${buttonarr[0]}.png`).then(urls=>setbutton(urls));
      firebase.getImageURL(`Logo/pictures/${washcarearr[0]}.png`).then(urls=>setwashcare(urls));
      
    },[])
// console.log(lablearr[0])

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
             <div className="headingfinalprodyct phf">
                <img src={logomain} alt="" />
            </div>
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url3} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="headingfinalprodyct phf mobhed">
                <img src={logomain} alt="" />
            </div>
            <div className="Traceability heading">
           
                    <h3>Product Background</h3>
                </div></div>
                <div className="details-sections trac">
                
                        <div className="datass">
                            <div className="det details"><p>{props.details}</p></div>
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
                            <p>Manufacturer name</p>
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
                        <div className="labless">
                            <p>Season </p>
                        </div>
                        <div className="datass">
                            <p>{props.type}</p>
                        </div>
                        <div className="labless">
                            <p>Clouser</p>
                        </div>
                        <div className="datass">
                            <p>{props.city}</p>
                        </div>
                        <div className="labless">
                            <p>Fabric care</p>
                        </div>
                        <div className="datass">
                            <p>{props.bodyFebric}</p>
                        </div>
                        <div className="labless">
                            <p>Gender</p>
                        </div>
                        <div className="datass">
                            <p>{props.gender}</p>
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
                            <p>Body Fabrics Content</p>
                        </div>
                        <div className="datass">
                            <p>{props.fibric}</p>
                        </div>
                        <div className="labless">
                            <p>Color</p>
                        </div>
                        <div className="datass">
                            <p>{props.color}</p>
                        </div>
                        <div className="labless">
                            <p>Occasion</p>
                        </div>
                        <div className="datass">
                            <p>{props.trim}</p>
                        </div>
                        <div className="labless">
                            <p>Release Date</p>
                        </div>
                        <div className="datass">
                            <p>{props.releaseDate}</p>
                        </div>
                        <div className="labless">
                            <p>Sewing yarn content</p>
                        </div>
                        <div className="datass">
                            <p>{props.swing}</p>
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
            <div className="headingfinalprodyct phf">
                <img src={logomain} alt="" />
            </div>
           
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url2} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3 traci">
            <div className="heading-main">
            <div className="headingfinalprodyct phf mobhed">
                <img src={logomain} alt="" />
            </div>
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
                            <div className="imglogo">
                                <img src={febricSupplierimg} alt="" />
                            </div>
                            
                        </div>

                        <div className="labless">
                            <p>Sewing Thread</p>
                        </div>
                        <div className="datass">
                            <p>{props.sewingThread}</p>
                            <div className="imglogo">
                                <img src={sewingThreadimg} alt="" />
                            </div>
                        </div>

                        <div className="labless">
                            <p>Label</p>
                        </div>
                        <div className="datass">
                            <p>{props.lable}</p>
                            <div className="imglogo">
                                <img src={lableimg} alt="" />
                            </div>
                        </div>
                        <div className="labless">
                            <p>Manufacturing facility</p>
                        </div>
                        <div className="datass">
                            <p>{props.manufacility}</p>
                        </div>

                        <div className="labless">
                            <p>Manufacturing country</p>
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
                            <div className="imglogo leftlogo">
                                <img src={interliningimg} alt="" />
                            </div>
                        </div>

                        <div className="labless">
                            <p>Embroidery Threads</p>
                        </div>
                        <div className="datass">
                            <p>{props.embroidery}</p>
                            <div className="imglogo leftlogo">
                                <img src={embroideryimg} alt="" />
                            </div>
                        </div>

                        <div className="labless">
                            <p>Buttons</p>
                        </div>
                        <div className="datass">
                            <p>{props.button}</p>
                            <div className="imglogo leftlogo">
                                <img src={buttonimg} alt="" />
                            </div>
                        </div>

                        <div className="labless">
                            <p>Washcare</p>
                        </div>
                        <div className="datass">
                            <p>{props.washcare}</p>
                            <div className="imglogo leftlogo">
                                <img src={washcareimg} alt="" />
                            </div>
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
                    

                   <div className="imgsectlogo">
                        <img src={logos} alt="" />
                   </div>
                <Link to='/trackingmain' state={props.productid}>Event History</Link>

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
            <div className="headingfinalprodyct phf">
                <img src={logomain} alt="" />
            </div>
            <div className="sect1 scroll ss">
            <div className="imgsce">
                    <img src={url4} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="headingfinalprodyct phf mobhed">
                <img src={logomain} alt="" />
            </div>
            <div className="Traceability heading">
                    <h3>Sustainability</h3>
                </div></div>
                <div className="details-sections trac">
                    <div className="det">
                   <p>
                    <div className="corbonfootprint sust">
                    <h4>{props.footprint}</h4><br/></div>
                    <div className="hding">
                        <h5>PRODUCT CARBON FOOTPRINT</h5>
                       <div className='fotprint'>
                       <img src={footprintlogo} alt="" /> <p><span> {props.footprintoverall}</span> : Kg CO2 e </p>
                        </div>

                    </div>
                    <div className="sublable">
                    <span>{props.eimmision}</span> : Kg CO2e of emission abated by using BMP Cotton<br/>
                    <span>{props.water}</span> : Grams of waste diverted from landfill <br/>
                    <span>{props.waste}</span> :  Grams of CO2 emission Per Garment by recycling of fabric waste<br/>
                    </div>
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
            <div className="headingfinalprodyct phf">
                <img src={logomain} alt="" />
            </div>
            <div className="sect1 scroll ss">
            <div className="imgsce re">
                    <img src={recycle} />
                </div>
                <div className="detailssec">
                    

            <div className="slide slide3">
            <div className="heading-main">
            <div className="headingfinalprodyct phf mobhed">
                <img src={logomain} alt="" />
            </div>
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
                            <h5>Recycle your product</h5>
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

// Product/A49-TREVIImage/'1680162220878-4M6A7758.webp
// product A49-TREVImage 
// Logo/pictures/Bombay.png
// /Logo/pictures