import React from 'react';
import './footer.css';

import { FaArrowRight,FaChevronUp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className='top'>
                <FaChevronUp />
                <button  id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
            </div>
            <div className='footer-main'>
            <div className="footer-section">
                <h1 id='title-company'>Canopy</h1>
                <p>Welcome to our website. We offer a wide range of products and services to cater to your needs. Explore and enjoy!</p>
            </div>
            <div className="footer-section">
                <h3>All Departments</h3>
                <ul>
                    <li>Electronics</li>
                    <li>Clothing</li>
                    <li>Home & Kitchen</li>
                    <li>Sports & Outdoors</li>
                    <li>Books</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Help and Support</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Shipping Information</li>
                    <li>Return Policy</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Recipes and Inspiration</h3>
                <p>Subscribe to our newsletter for the latest recipes and inspiration:</p>
                <input type="email" placeholder="Enter your email" />
                <button><FaArrowRight /></button>
            </div>

            </div>
           
        </div>
    );
};

export default Footer;
