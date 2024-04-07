import React from 'react';
import './Footer.css';
import {RiInstagramLine, RiWhatsappLine, RiPinterestLine} from 'react-icons/ri';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src=''/>
            <p>SHOPHERE</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
                <RiInstagramLine/>
            </div>
            <div className='footer-icons-container'>
                <RiPinterestLine/>
            </div>
            <div className='footer-icons-container'>
                <RiWhatsappLine/>
            </div>         

        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>

        </div>
  )
}
export default Footer;
