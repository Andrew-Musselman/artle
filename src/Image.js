import React from 'react';
import './Image.css';

const Image = ({image, title}) => {
    return (
        <>
         <img src={image} alt={title} />
        </>
    )
}

export default Image;