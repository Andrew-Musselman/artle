import React from 'react';
import PropTypes from 'prop-types'
import './Image.css';

const Image = ({image, title}) => {
    return (
        <div className='img-container'>
         <img src={image} alt={title} />
        </div>
    )
}

export default Image;

Image.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string
}