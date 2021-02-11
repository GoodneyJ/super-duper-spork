import React from 'react'
import Hero from '../components/hero.js';
import Footer from '../components/footer.js';
import Party from '../IMAGES/PARTY.jpg';
import '../css/receptionStyles.css';

export default function reservations(props) {
    return (
        <div>
            <Hero
            heading="Reservations"
            caption="We accept a limited number of reservations up to one months in advance for parties up to 10"
            img={Party}
            />
            
            {/* First Section */}
            <div id="reception-section-container">
                <h1 id="reception-section-heading">Call (555)555-5555 to reserve a room for your reception or party.</h1>
                <div id="reception-section-info">
                    <div>
                        <h3>By Phone</h3>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>                    
                    </div>
                    <div>
                        <h3>Special Events & Private Parties</h3>
                    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
