import React from 'react'
import {FaYelp, FaInstagram, FaFacebookF} from 'react-icons/fa';

export default function navbar() {

    
    window.onscroll = function() {navFunc()};
    
    function navFunc() {
        
        let navbar = document.getElementById("navbar-container")


        if(window.pageYOffset >= 100) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    return (
        <div id="navbar-container">
            <h2 id="nav-logo">RESTAURANT</h2>

            <div id="nav-links-container">
                <ul id="nav-links-list">
                    <li className="nav-link active">Home</li>
                    <li className="nav-link">Menu</li>
                    <li className="nav-link">Reservations</li>
                    <li className="nav-link">Locations</li>
                </ul>
                <ul id="nav-socials-list">
                    <li className="nav-social-icon"><FaYelp/></li>
                    <li className="nav-social-icon"><FaInstagram /></li>
                    <li className="nav-social-icon"><FaFacebookF /></li>
                </ul>
            </div>
        </div>
    )
}
