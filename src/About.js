import React from "react";
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <p>Artle is a game to help you learn more about art history by guessing the artist based on paintings</p>
            <p>You will have six attempts to guess the correct artist</p>
            <p>Each failed attempt will give you a new painting by that artist</p>
        </div>
    )
}

export default About;