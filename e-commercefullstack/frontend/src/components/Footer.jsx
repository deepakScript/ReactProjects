import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css' // Assuming you have a CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="site-footer max-padd-container py-16 bg-secondary">
      <div className="footer-container">
        {/* Left side with e-commerce name */}
        <div className="footer-brand">
          <h2>shop</h2>
          <p className="tagline text-white">Your one-stop shopping destination</p>
        </div>

        {/* Right side with 3 columns */}
        <div className="footer-columns">
          {/* Column 1 - Shop */}
          <div className="footer-col">
            <h3>Shop</h3>
            <ul>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </div>

          {/* Column 2 - Help */}
          <div className="footer-col">
            <h3>Help</h3>
            <ul>
              <li><a href="/customer-service">Customer Service</a></li>
              <li><a href="/track-order">Track Order</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@shopease.com">hello@shopease.com</a></li>
              <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
              <li>
                <div className="social-icons">
                  <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                  <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright text-white">
        <p className='text-white'>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
