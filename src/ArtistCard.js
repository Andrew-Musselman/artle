import React from 'react';
import PropTypes from 'prop-types';

const ArtistCard = ({artistName, artistBio }) => {
    return (
        <div className='artist-card'>
            <h3>{artistName}</h3>
            <p>{artistBio}</p>
        </div>
    )
}

export default ArtistCard;

ArtistCard.propTypes = {
    artistName: PropTypes.string.isRequired,
    artistBio: PropTypes.string.isRequired
}