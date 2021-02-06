import React from 'react'
import {FaYelp, FaInstagram, FaFacebookF} from 'react-icons/fa';

export default function footer() {
    return (
        <div id="footer-container">
           
            <div id='footer-content-container'>
                <div id="footer-content-heading">
                    <h2 id="footer-heading">Locations</h2>
                </div>
                <div id="location-card-container">

                    <div className="location-card">
                        <h4>Brooklyn</h4>
                        <p className="address">123 Demo Street New York, NY 12345</p>
                        <p>(555) 555-5555</p>
                        <p>Monday - Sunday </p>
                        <p>10am - 10pm</p>
                    </div>

                    <div className="location-card">
                        <h4>Queens</h4>
                        <p className="address">123 Demo Street New York, NY 12345</p>
                        <p>(555) 555-5555</p>
                        <p>Monday - Sunday </p>
                        <p>10am - 10pm</p>
                    </div>

                    <div className="location-card">
                        <h4>Food Truck</h4>
                        <p className="address">123 Demo Street New York, NY 12345</p>
                        <p>(555) 555-5555</p>
                        <p>Monday - Sunday </p>
                        <p>10am - 10pm</p>
                    </div>

                    <div className="location-card">
                        <div id="footer-social-icons">
                            <p><FaYelp className="icon"/></p>
                            <p><FaInstagram className="icon" /></p>
                            <p><FaFacebookF className="icon" /></p>
                        </div>

                        <p id="made-with">Made with <span className="uppercase">ReactJS</span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}
