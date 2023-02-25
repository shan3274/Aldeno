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
            <h1>Our Service</h1>
            <div className="rows">
                <div className="services">
                <span><IoQrCodeSharp className='icon-fo'/></span>
                    <h2>Digital ID</h2>
                    <p>Lorem ipsvoluptas nam fuga cupiditate expedita ut.</p>
                </div>

                <div className="services">
                <span><BiLineChart className='icon-fo'/></span>
                    <h2>Real-time Tracking</h2>
                    <p>Lorem ipsvoluptas nam fuga cupiditate expedita ut.</p>
                </div>

                <div className="services">
                <span><MdSell className='icon-fo'/></span>
                    <h2>Resell</h2>
                    <p>Lorem ipsvoluptas nam fuga cupiditate expedita ut.</p>
                </div>

                <div className="services">
                <span><BsRecycle className='icon-fo'/></span>
                    <h2>Recycle</h2>
                    <p>Lorem ipsvoluptas nam fuga cupiditate expedita ut.</p>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default Ourservice