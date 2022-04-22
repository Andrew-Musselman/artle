import React from 'react';
import ArtistCard from './ArtistCard';
import ImageCarousel from './ImageCarousel';
import './CorrectScreen.css';

const CorrectScreen = ({ artistName, artistBio, images }) => {

    return (
        <>
            <h2>Congrats, you got it</h2> 
            <ImageCarousel images={images} />
            <ArtistCard artistName={artistName} artistBio={artistBio} />
        </>

    )
}

export default CorrectScreen;