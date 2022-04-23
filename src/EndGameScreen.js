import React from 'react';
import ArtistCard from './ArtistCard';
import ImageCarousel from './ImageCarousel';
import EndGameMessage from './EndGameMessage'


const EndGameScreen = ({ correctGuess, artistName, artistBio, images }) => {

    return (
        <>
            <EndGameMessage correctGuess={ correctGuess }/>
            <ImageCarousel images={images} />
            <ArtistCard artistName={artistName} artistBio={artistBio} />
        </>

    )
}

export default EndGameScreen;