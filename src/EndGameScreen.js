import React from 'react';
import ArtistCard from './ArtistCard';
import ImageCarousel from './ImageCarousel';
import EndGameMessage from './EndGameMessage'
import PropTypes, {string} from 'prop-types';


const EndGameScreen = ({ correctGuess, artistName, artistBio, images, titles, newGame }) => {

    return (
        <>
            <EndGameMessage correctGuess={ correctGuess }/>
            <ImageCarousel images={images} titles={titles}/>
            <ArtistCard artistName={artistName} artistBio={artistBio} />
            <button onClick={() => newGame()}>Play Again</button>
        </>

    )
}

export default EndGameScreen;

EndGameScreen.propTypes = {
    correctGuess: PropTypes.bool.isRequired,
    artistName: PropTypes.string.isRequired,
    artistBio: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(string).isRequired,
    titles: PropTypes.arrayOf(string).isRequired,
    newGame: PropTypes.func.isRequired
}