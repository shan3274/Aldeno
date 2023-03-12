import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFirebase } from '../../../Context/Firebase';

const Addproduct = () => {

    const firebase = useFirebase();
    const[images,setImage]=useState([]);
    const[productid,setProductid]=useState('');
    const[productName,setProductName]=useState('');
    const[productType,setProductType]=useState('');
    const[email,setEmail]=useState('');
    const[footprint,setFootprint]=useState('');
    const[water,setWater]=useState('');
    const[eimmision,setEimmision]=useState('');
    const[waste,setWaste]=useState('');

    const[fibric,setFibric]=useState('')
    const[manufacturere,setManufacturere]=useState('')
    const[city,setCity]=useState('')
    
    const[size,setSize]=useState('');
    const[type,setType]=useState('');
    const[color,setColor]=useState('');
    const[details,setDetails]=useState('');

    const[parentOrg,setparentOrg]=useState('');
    const[gender,setGender]=useState('');
    const[percentage,setPercentage]=useState('');
    const[trim,setTrim]=useState('');
    const[swing,setSwing]=useState('');
    const[bodyFebric,setBodyFebric]=useState('');
    
    const[febricSupplier,setFebricSupplier]=useState('');
    const[interlining,setInterlining]=useState('');
    const[sewingThread,setSewingThread]=useState('');
    const[embroidery,setEmbroidery]=useState('');
    const[lable,setLable]=useState('');
    const[button,setButton]=useState('');
    const[washcare,setWashcare]=useState('');
    const[certifications,setCertifications]=useState('');
    const[manufacility,setManufacility]=useState('');
    const[country,setCountry]=useState('');
    const[origin,setOrigin]=useState('');
    const[price,setPrice]=useState('');
    const[sizeSystem,setSizeSystem]=useState('');
    const[releaseDate,setReleaseDate]=useState('');
    
    

    
    const upload = ()=>{
        
        if(productid == null || productType == null || email == null ||images== null) return;
        firebase.addProduct(productid,productName,size,type,color,details,footprint,eimmision,water,waste,fibric,manufacturere,city,images
            ,parentOrg,gender,percentage,trim,swing,bodyFebric,febricSupplier,interlining,sewingThread,embroidery,lable,button,
            washcare,certifications,manufacility,country,origin,price,sizeSystem,releaseDate
            ).then(()=>{
            alert("Product Added");
            setparentOrg('');
            setGender('');
            setPercentage('');
            setTrim('');
            setSwing('');
            setBodyFebric('');
            setImage([]);
            setSize('');
            setType('');
            setColor('');
            setDetails('');
            setProductName('');
            setFootprint('');
            setWaste('');
            setEimmision('');
            setWater('');
            setCity('');
            setFibric('');
            setManufacturere('');
            setPrice('');
            setSizeSystem('');
            setReleaseDate('');
            setFebricSupplier('');
            setInterlining('');
            setSewingThread('');
            setEmbroidery('');
            setLable('');
            setButton('');
            setWashcare('');
            setCertifications('');
            setManufacility('');
            setCountry('');
            setOrigin('');
        });
        
    }
    
  return (
    <div>
        <div className="main_container_resell">
        <div className="header_container">
            <div className="Adleno_admin_header">
                <Link to='/Billing'><h3>Aldeno <span>admin</span></h3></Link>
            </div>
            <div className="list">
                
                    <div >
                    <Link to='/addproduct'>Add Product</Link>
                    </div>
                    <div>
                    <Link to='/qrcode'>Link With QR</Link>
                    </div>
                    <div>
                    <Link to='/resellproduct'>Resell Request</Link>
                    </div>
                    <div>
                    <Link to='/Billing'>Billing</Link>
                    </div>
                    
                
            </div>
        </div>
            <div className="resell_container">
                <div className="Title_addproduct">
                    <h3>Add your Product</h3>
                </div>
               
                <div className="image_container_resell">
                    
                    <label htmlFor="file">Image Upload +
                    
                    <input type="file" 
                   id='file' 
                   multiple
                   onChange={(e)=>setImage(e.target.files)}/>
                   </label>
                </div>
                <div className="text_container_resell">
                    <div className="label_container_resell">
                        <label>Product ID</label>
                    </div>
                    <div className="data_container_resell">
                        <input type="text" 
                        className='addpro'
                        placeholder='Enter Your Prodecut id'
                        value={productid}
                        onChange={(e)=>setProductid(e.target.value)}
                        />
                    </div>
                    <div className="label_container_resell">
                        <label>Product Name</label>
                    </div>
                    <div className="data_container_resell">
                        <input type="text" 
                        className='addpro'
                        placeholder='Enter Your Prodecut name'
                        value={productName}
                        onChange={(e)=>setProductName(e.target.value)}
                        />
                    </div>

                    <div className="label_container_resell">
                        <label>Product Details</label>
                    </div>
                    <div className="data_container_resell">
                        <div className="details_con">
                            <input type="text" placeholder='size'
                            value={size}
                            onChange={(e)=>setSize(e.target.value)}
                            />
                            <input type="text" placeholder='type'
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            />
                            <input type="text" placeholder='color'
                            value={color}
                            onChange={(e)=>setColor(e.target.value)}
                            />
                            
                        </div>

                        <div className="details_con">
                            <input type="text" placeholder='price'
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                            />
                            <input type="text" placeholder='Size System'
                            value={sizeSystem}
                            onChange={(e)=>setSizeSystem(e.target.value)}
                            />
                            <input type="text" placeholder='Release Date'
                            value={releaseDate}
                            onChange={(e)=>setReleaseDate(e.target.value)}
                            />
                        </div>
                        
                        <div className="details_con manufact">
                            <input type="text" placeholder='Fibric'
                            value={fibric}
                            onChange={(e)=>setFibric(e.target.value)}
                            />

                            <input type="text" placeholder='Manufacturer name'
                            value={manufacturere}
                            onChange={(e)=>setManufacturere(e.target.value)}
                            />

                            <input type="text" placeholder='city'
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            />
                            
                        </div>

                        
                        <div className="details_con manufact">
                            <input type="text" placeholder='Parent Organization'
                            value={parentOrg}
                            onChange={(e)=>setparentOrg(e.target.value)}
                            />

                            <input type="text" placeholder='Gender'
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                            />

                            <input type="text" placeholder='materials percantage'
                            value={percentage}
                            onChange={(e)=>setPercentage(e.target.value)}
                            />
                            
                        </div>

                        <div className="details_con manufact">
                            <input type="text" placeholder='Body Fabric Type'
                            value={bodyFebric}
                            onChange={(e)=>setBodyFebric(e.target.value)}
                            />

                            <input type="text" placeholder='Trim Type'
                            value={trim}
                            onChange={(e)=>setTrim(e.target.value)}
                            />

                            <input type="text" placeholder='Sewing yarn content and percent'
                            value={swing}
                            onChange={(e)=>setSwing(e.target.value)}
                            />
                            
                        </div>


                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Product Background'
                            value={details}
                            onChange={(e)=>setDetails(e.target.value)}
                            ></textarea>
                        </div>






                        <div className="label_container_resell">
                            <label>Tracebility</label>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Febric Supplier'
                            value={febricSupplier}
                            onChange={(e)=>setFebricSupplier(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Interlining'
                            value={interlining}
                            onChange={(e)=>setInterlining(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Sewing Thread'
                            value={sewingThread}
                            onChange={(e)=>setSewingThread(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Embroidery Threads'
                            value={embroidery}
                            onChange={(e)=>setEmbroidery(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Lable'
                            value={lable}
                            onChange={(e)=>setLable(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Button'
                            value={button}
                            onChange={(e)=>setButton(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Washcare'
                            value={washcare}
                            onChange={(e)=>setWashcare(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="3" placeholder='Product and material certifications '
                            value={certifications}
                            onChange={(e)=>setCertifications(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Manufacturing facility  '
                            value={manufacility}
                            onChange={(e)=>setManufacility(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="1" placeholder='Maufactring country'
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="1" placeholder='Country of Origin'
                            value={origin}
                            onChange={(e)=>setOrigin(e.target.value)}
                            ></textarea>
                        </div>








                        <div className="label_container_resell">
                            <label>Sustainability</label>
                        </div>
                        <div className="details_con">
                            <textarea name="" id="" cols="30" rows="2" placeholder='Carbon footprint'
                            value={footprint}
                            onChange={(e)=>setFootprint(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="label_container_resell">
                            <label>Climate positive</label>
                        </div>
                        <div className="details_con sus">
                            <input type="text"
                            placeholder='emission avoided' 
                            value={eimmision}
                            onChange={(e)=>setEimmision(e.target.value)}/>
                            
                            <input type="text"
                            placeholder='Water saved' 
                            value={water}
                            onChange={(e)=>setWater(e.target.value)}/>
                            
                            <input type="text"
                            placeholder='waste diverted' 
                            value={waste}
                            onChange={(e)=>setWaste(e.target.value)}/>
                            
                        </div>

                        
                       
                    </div>

                    
                    <div className="btn_resell">
                        <button onClick={upload}>Add Product</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Addproduct