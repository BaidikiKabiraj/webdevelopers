import React from 'react'
import './footer.css'
import { IoIosArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo.webp' alt=''></img>
                    
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Categories</h3>
                        <ul>
                            <li>Web Builder</li>
                            <li>Hosting</li>
                            <li>Data Center</li>
                            <li>Robot-Automation</li>
                        </ul>
                    </div>
                    
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Service</li>
                            <li>Categories</li>
                            <li>About</li>
                        </ul>
                    </div>

                    <div className='box'>
                        <h3>United States</h3>
                        <button className="button"><IoIosArrowDropdown /></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer