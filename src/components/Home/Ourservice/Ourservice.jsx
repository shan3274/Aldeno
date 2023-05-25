import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Ourservice.css';
import {BiLineChart} from 'react-icons/bi';
import {IoQrCodeSharp} from 'react-icons/io5';
import {MdSell} from 'react-icons/md';
import {BsRecycle} from 'react-icons/bs';




const Ourservice = () => {
  return (
    <div className='Service_main'>
        <div className="containerr">
            <h1>Key Features</h1>
            <div className="rows">
                <div className="services">
                <span><IoQrCodeSharp className='icon-fo'/></span>
                    <h2>Digital ID</h2>
                    <p>A digital ID enables you to Track your product using QR code and NFC tags. A digital ID—also known as a digital certificate</p>
                </div>

                <div className="services">
                <span><BiLineChart className='icon-fo'/></span>
                    <h2>Real-time Tracking</h2>
                    <p>The tracking method that makes use of product cloud to determine the complete product history  in time</p>
                </div>

                <div className="services">
                <span><MdSell className='icon-fo'/></span>
                    <h2>Resell</h2>
                    <p>You can resell your product easily , we provide the section of resell in product page</p>
                </div>

                <div className="services">
                <span><BsRecycle className='icon-fo'/></span>
                    <h2>Recycle</h2>
                    <p>You can recycle your product you can get the informaion about it in resell and recycle section of product page</p>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default Ourservice