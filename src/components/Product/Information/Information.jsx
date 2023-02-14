import React from 'react'
import './Information.css';
const Information = () => {
  return (
    <div>
        <ul className="accordion">
            <li>
                <input type="radio" name='accordion' id='first'/>
                <label htmlFor="first" className='label'>Products</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='second'/>
                <label htmlFor="second" className='label'>Information</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='third'/>
                <label htmlFor="third" className='label'>Questions</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id='fourth'/>
                <label htmlFor="fourth" className='label'>Guides</label>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos architecto illum,
                        deserunt voluptates aliquam necessitatibus laboriosam nemo odit.
                        Magni nulla corporis error fugiat blanditiis nihil 
                        voluptatem impedit amet porro expedita!
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Information