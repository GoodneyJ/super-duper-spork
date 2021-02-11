import React from 'react'
import Nav from './navbar.js'

export default function hero(props) {

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${props.img})`,
    }

    return (
        <div id="hero-container" style={styles}>
            <Nav />
            <div id="center-text">
                <div>
                    <h1 id="cta-heading">{props.heading}</h1>
                    <p id="cta-subheading">{props.caption}</p>
                </div>
            </div>
        </div>
    )
}
