import React from 'react';
import './Image.css';

const Image = ({image, title}) => {
    return (
        <div className='img-container'>
         <img src={image} alt={title} />
        </div>
    )
}

export default Image;