import React from 'react'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Steak from '../IMAGES/STEAK.jpg'
import SteakBowl from '../IMAGES/STEAKBOWL.jpg'
import Fish from '../IMAGES/FISH.jpg'
import Icecream from '../IMAGES/ICECREAM.jpg'
import Veggies from '../IMAGES/VEGGIES.jpg'

export default function homepage() {
    document.title = "Restaurant | Homepage"

    return (
        <div id="homepage-container">
            <Hero
            heading="Inspired Thai Cuisine"
            caption="Voted New York's Best Thai Restaurant"
            img={Veggies}
            />

            {/* FIRST SECTION */}
            <div id="first-section-container">
                <h2 className="uppercase">A Destination</h2>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            {/* SECOND SECTION */}
            <div id="second-section-container">
                <div id="second-section-text">
                    <h1 className="uppercase">Eat Together</h1>
                    <p>Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour – dessert.</p>
                    <a href="#">Make a Reservation</a>
                </div>
            </div>

            {/* THIRD SECTION */}
            <div id="third-section-container">
                <div id="third-section-card-container">
                    <div className="third-section-card">
                        <img src={Fish} />
                        <h4 className="uppercase">Crafted in the Kitchen</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.</p>
                    </div>

                    <div className="third-section-card">
                        <img src={Steak} />
                        <h4 className="uppercase">Fresh Ingredients</h4>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="third-section-card">
                        <img src={Icecream} />
                        <h4 className="uppercase">Crafted in the Kitchen</h4>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <a href="#">View Menu</a>
            </div>

            {/* FOURTH SECTION */}
            <div id="fourth-section-container">
                <div id="fourth-section-text">
                    <h1 className="uppercase">The Kitchen</h1>
                </div>
            </div>

            {/* FIFTH SECTION */}
            <div id="fifth-section-container">
                <div id="fifth-section-card-container">
                    <div className="fifth-section-card">
                        <h3 className="uppercase">LIZ GRISAITIS</h3>
                        <h5 className="uppercase">Executive Chef</h5>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="fifth-section-card">
                        <h3 className="uppercase">MATTEO CAPON</h3>
                        <h5 className="uppercase">Chef De Cuisine</h5>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="fifth-section-card">
                        <h3 className="uppercase">LIZ GRISAITIS</h3>
                        <h5 className="uppercase">Pastry Chef</h5>
                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <img id="steak-bowl" src={SteakBowl} />

            </div>

            <Footer />
            
        </div>
    )
}
