import React from 'react'
import {FaYelp, FaInstagram, FaFacebookF} from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
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
                    <li id="nav-home-link" className="nav-link">
                        <NavLink className="router-link" to="/home">Home</NavLink>
                    </li>
                    <li id="nav-menu-link" className="nav-link">
                        <NavLink className="router-link" to='/menu'>Menu</NavLink>
                    </li>
                    <li id="nav-reservations-link" className="nav-link">
                        <NavLink className="router-link" to='/reservations'>Reservations</NavLink>
                    </li>
                    <li id="nav-locations-link" className="nav-link">
                        <NavLink className="router-link" to='/locations'>Locations</NavLink>
                    </li>
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
