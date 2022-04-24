import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';

const EndGameMessage = ({ correctGuess }) =>  {
    return (
        <div>
            {correctGuess ? <h2>Congrats, you got it</h2> : <h2>You missed it this time</h2>}
        </div>
    )
}

export default EndGameMessage

ArtistCard.propTypes = {
    correctGuess: PropTypes.bool.isRequired
}