import React from "react";
import PropTypes, { string }  from "prop-types";
import GameScreen from './GameScreen';
import GuessForm from './GuessForm';
import EndGameScreen from './EndGameScreen';
import loading from './loading.gif'

const Home = ({isLoading, hasError, gameOver, errorMessage, correctGuess, viewableImages, artistName, artistBio, images, titles, playGame, newGame}) => {
    return (
        <>
            {hasError && <h2 className='error'>{errorMessage}</h2>}
            {isLoading && <img src={loading} /> }
            {!correctGuess && !gameOver && <GameScreen images={viewableImages} /> } 
            {gameOver && <EndGameScreen correctGuess={correctGuess} artistName={artistName} artistBio={artistBio} images={images} titles={titles} newGame={newGame}/>}
            {!hasError &&<GuessForm playGame={playGame} /> }
        </>
    )
}

export default Home;

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    gameOver: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    correctGuess: PropTypes.bool.isRequired,
    viewableImages: PropTypes.arrayOf(string).isRequired,
    artistName: PropTypes.string.isRequired,
    artistBio: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(string).isRequired,
    titles: PropTypes.arrayOf(string).isRequired,
    playGame: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired
}