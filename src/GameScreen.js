import React from 'react';
import ImageCarousel from './ImageCarousel';
import './GameScreen';

const GameScreen = ({ images }) => {
    return (
        <div  className='images'>
            <h2>Guess the Artist</h2>
            <ImageCarousel images={images} />
        </div>
    )
}

export default GameScreen