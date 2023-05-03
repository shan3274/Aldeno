import React from 'react'
import './Style.css';
import img1 from '../img/cotton.jpeg';
import img2 from '../img/garment.jpeg';
import img3 from '../img/transpotation.webp';
import {AiOutlineCheckCircle,AiOutlineArrowRight,AiOutlineQuestionCircle,AiOutlineClose} from 'react-icons/ai';
import {GiRecycle,GiFruitTree,GiFactory} from 'react-icons/gi';
import {FiTruck} from 'react-icons/fi';
import {MdOutlineAutorenew} from 'react-icons/md';
import {ImLocation} from 'react-icons/im';
import {BsPeople} from 'react-icons/bs';
export default function Modal({open,cultivation,children,onClose}){
  if(!open) return null
  return (
    <div className="main_popsup">
        <div className="popups">
            <div className="leftview">
                <div className="discription_product">
                    <h2>This product's carbon offset is {children.pcf} kg</h2>
                </div>
                <div className="details_popsup">
                    <div className=""><p><span className='iconli'><AiOutlineCheckCircle/> </span>Third party verified <span className='qes'><AiOutlineQuestionCircle/></span></p></div>
                    <div className=""><p><span className='iconli'><GiRecycle/></span> Phases brand has offset <span className='qes'><AiOutlineQuestionCircle/></span></p></div>
                </div>
                <div className="iconsset">
                    <div className=""><GiFruitTree/></div>
                    <div className=""><AiOutlineArrowRight/></div>
                    <div className=""><GiFactory/></div>
                    <div className=""><AiOutlineArrowRight/></div>
                    <div className=""><FiTruck/></div>
                    
                </div>
            </div>
            <div className="rightview">
                <div className="sect_pops">
                    <div className="imgsect">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="datasect">
                        <div className="">
                            <h2>Cotton Cultivation</h2>
                        </div>
                        <div className="">
                            <p><ImLocation/> India</p>
                        </div>
                        <div className="cr">
                            <h5>{children.cultivation} kg of carbon offset</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="sect_pops">
                    <div className="imgsect">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="datasect">
                        <div className="">
                            <h2>Grament Manufacturing</h2>
                        </div>
                        <div className="">
                            <p><ImLocation/>India</p>
                        </div>
                        <div className="cr">
                            <h5>{children.garment} kg of carbon offset</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="sect_pops trsn">
                    <div className="imgsect">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="datasect">
                        <div className="">
                            <h2>Transportation</h2>
                        </div>
                        
                
                        <div className="cr">
                            <h5>{children.transport} kg of carbon offset</h5>
                            
                        </div>
                        <div className="closewin" onClick={onClose}>
                            <AiOutlineClose/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}
