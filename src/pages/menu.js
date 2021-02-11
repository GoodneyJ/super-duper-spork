import React from 'react'
import Hero from '../components/hero.js'
import Footer from '../components/footer.js'
import MenuItem from '../components/menuItem.js'
import Kitchen from '../IMAGES/KITCHEN.jpg'
import '../css/menuStyles.css'
export default function menu(props) {
    document.title = "Restaurant | Menu"
    

    return (
        <div>
            <Hero
                heading="Welcome to the Menu!"
                caption="Delicious food and prices"
                img={Kitchen}
            />

            {/* First Section */}
            <div id="appetizer-section-container">
                <h1 id="appetizer-section-heading">Appetizers</h1>
                <div className="menu-list-container">
                    <div className="menu-column">
                        <MenuItem
                        title="Fried Spring Rolls"
                        price='14'
                        desc="Chicken or Vegetable"
                        />
                        <MenuItem
                        title="Tofu Tod"
                        price='15'
                        desc="Fried tofu with a mild chili peanut sauce"
                        />                        
                        <MenuItem
                        title="Fried Tiger Shrimp Rolls"
                        price='18'
                        desc="with a plum sauce"
                        /> 
                    </div>
                    <div className="menu-column">
                        <MenuItem
                        title="Gai Of Nuur Satay"
                        price='4.95'
                        desc="Skewered chicken or beef with a peanut sauce"
                        />
                        <MenuItem
                        title="Fresh Thai Summer Roll"
                        price='4.50'
                        desc="with shrimp in a tamarind sauce"
                        />                        
                        <MenuItem
                        title="Thai Spare Ribs"
                        price='8.95'
                        desc="glazed and grilled pork ribs"
                        /> 
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div id="entrees-section-container">
                <h1 id="entrees-section-heading">ENTRÉES</h1>
                <div className="menu-list-container">
                    <div className="menu-column">
                        <MenuItem
                        title="Gai Pad Khing"
                        price='7.95'
                        desc="sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce"
                        />
                        <MenuItem
                        title="Nuur Kra Prow"
                        price='8.50'
                        desc="sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce"
                        />                        
                        <MenuItem
                        title="Koong Pad Khing"
                        price='8.95'
                        desc="sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce"
                        />
                        <MenuItem
                        title="Gai Kratiam"
                        price='7.95'
                        desc="sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce"
                        />
                        <MenuItem
                        title="Beef & Broccoli"
                        price='8.50'
                        desc="sauteed in oyster sauce"
                        />                        
                        <MenuItem
                        title="Koong Kratiam"
                        price='8.95'
                        desc="sauteed shrimp with broccoli, cabbage, carrots and onions in a fresh garlic sauce"
                        /> 
                    </div>
                    <div className="menu-column">
                    <MenuItem
                        title="Gai Pad Khing"
                        price='7.95'
                        desc="sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce"
                        />
                        <MenuItem
                        title="Nuur Kra Prow"
                        price='8.50'
                        desc="sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce"
                        />                        
                        <MenuItem
                        title="Koong Pad Khing"
                        price='8.95'
                        desc="sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce"
                        />
                        <MenuItem
                        title="Gai Kratiam"
                        price='7.95'
                        desc="sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce"
                        />
                        <MenuItem
                        title="Beef & Broccoli"
                        price='8.50'
                        desc="sauteed in oyster sauce"
                        />                        
                        <MenuItem
                        title="Koong Kratiam"
                        price='8.95'
                        desc="sauteed shrimp with broccoli, cabbage, carrots and onions in a fresh garlic sauce"
                        /> 
                    </div>
                </div>
            </div>

                        {/* SECOND SECTION */}
                <div id="dessert-section-container">
                <h1 id="dessert-section-heading">Desserts</h1>
                <div className="menu-list-container">
                    <div className="menu-column">
                        <MenuItem
                        title="Khao Neow Ma Muang"
                        price='5.95'
                        desc="sliced mango with sticky rice and coconut milk"
                        />
                        <MenuItem
                        title="Khao Tom Mud"
                        price='6.50'
                        desc="steamed sticky rice in a banana leaf with baby banana"
                        />                        
                        <MenuItem
                        title="Fried Tiger Shrimp Rolls"
                        price='7.50'
                        desc="deep-fried banana topped with coconut ice cream"
                        /> 
                    </div>
                    <div className="menu-column">
                        <MenuItem
                        title="Khao Neow Dam"
                        price='5.50'
                        desc="Black sticky rice with shredded coconut"
                        />
                        <MenuItem
                        title="Nam Kang Sai"
                        price='5.95'
                        desc="shaved ice with grass jelly and jackfruit"
                        />                        
                        <MenuItem
                        title="Gelato"
                        price='4.95'
                        desc="seasonal flavor made in-house"
                        /> 
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
