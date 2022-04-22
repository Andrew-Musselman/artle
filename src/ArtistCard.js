import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({artistName, artistBio}) => {
    return (
        <div className='artist-card'>
            <h3>{artistName}</h3>
            <p>{artistBio}</p>
        </div>
    )
}

export default ArtistCard;