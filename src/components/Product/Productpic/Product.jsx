import React from "react";
import './product.css'
import img1 from '../img/shoe.jpg'
const Product = ()=>{
    return(
       <div>
        <div>
            <div className="card">
                <div class="imgBx">
                    <img src={img1} alt=""/>
                </div>
        <div className="details">
            <h3>Nike Air Max <br/><span>Men's Shoe</span></h3>
            <h4>Product details</h4>
            <p>Lorem ipsum, dolor hjggnj jh vgfgfgfcgfdgr jhggf remque? Porro, ut, laudantium quas </p>
            <h4>Size</h4>
            <ul className="size">
                <li>36</li>
                <li>38</li>
                <li>40</li>
                <li>42</li>
            </ul>
            <div className="group">
                <h2><sup>$</sup>199 <small>.99</small></h2>
                <a href="#">Buy Now</a>
            </div>
        </div>   
    </div>
    </div>
    </div>

    )
}
export default Product;