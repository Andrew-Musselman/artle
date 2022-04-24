import React from 'react';
import ImageCarousel from './ImageCarousel';
import './GameScreen';
import PropTypes, { string } from 'prop-types';

const GameScreen = ({ images }) => {
    return (
        <div  className='images'>
            <h2>Guess the Artist</h2>
            <ImageCarousel images={images} />
        </div>
    )
}

export default GameScreen

GameScreen.propTypes = {
    images: PropTypes.arrayOf(string).isRequired
}