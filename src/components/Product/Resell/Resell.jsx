import React, { useState } from 'react';
import './Resell.css';
import Productheader from '../Productpage/Productheader'
import { useFirebase } from '../../../Context/Firebase';
const Resell = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const[productid,setProductid]=useState('');
    const[productType,setProductType]=useState('');
    const[email,setEmail]=useState('');
    const[coverPic,setCoverPic]=useState('');


    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
      setCoverPic(event.target.files[0]);
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }

  const firebase = useFirebase();
  
  const handle = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(productid,productType,email,coverPic);

  }
  console.log(productid,productType,email,coverPic)
  
  return (
    <div className='resell_body'>
        <Productheader/>
        
        <div className="resell-title">
            <h1>Resell Your Product</h1>
        </div>
        <div className="input_file_container">
           <div className="image_area">

           <section>
                <label className='img-label-resell'>
                    + Add Images 
                    <br />
                  
                    <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/*"
                    />
                </label>
                <br />

                <input type="file" multiple />

                {selectedImages.length > 0 &&
                    (selectedImages.length < 4 ? (
                    <p className="error">
                       
                    </p>
                    ) : (
                    <button
                        className="upload-btn"
                        onClick={() => {
                        console.log(selectedImages);
                        }}
                    >
                        
                    </button>
                    ))}

                <div className="images">
                    {selectedImages &&
                    selectedImages.map((image, index) => {
                        return (
                        <div key={image} className="image">
                            
                            <img src={image} height="200" alt="upload" className='img' />
                            <button onClick={() => deleteHandler(image)} className='dlt-btn'>
                            delete image <p>{index + 1}</p>
                            </button>
                            
                            
                        </div>
                        );
                    })}
                </div>
    </section>




           </div>
            <div className="input-text-resell">
                <p>Product I'D</p>
                <input type="text" 
                placeholder='Product ID'
                value={productid}
                onChange={(e)=>setProductid(e.target.value)}
                className='resell-details-input' />
                <p>Product Type</p> 
                <input type="text"  
                placeholder='Product ID'
                value={productType}
                onChange={(e)=>setProductType(e.target.value)}
                className='resell-details-input' />
                <p>Email</p> 
                <input type="email" 
                placeholder='Product ID'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='resell-details-input' />
                <button className='btn-resell' onClick={handle}>Request to Sell</button>
            </div>
        </div>
    </div>
  )
}

export default Resell