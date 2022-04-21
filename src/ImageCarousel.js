import React, { useState } from 'react';
import Image from './Image';
import './ImageCarousel.css';

const ImageCarousel = ({ images, titles }) => {

    const imagesOne = images.map(image => {
        return <Image image={image}  />
    })

    const [index, setIndex] = useState(0);


    return (
        <div className='images'>
            <h2>Guess the Artist</h2>
          <div className='slide-show'>
            <div className='slide-show-slider' style={{ transform:'translate(' + (-index * 100) + '%, 0)'}}>
                {imagesOne.map((image, index) => (
                  <div className='slide' key={index} >{image}</div>
                ))}
            </div>
            <div className='slide-show-dots'>
              {imagesOne.map((_, idx) => (
                <div key={idx} className={`slide-show-dot${index === idx ? ' active' : ''}`} onClick={() => {
                  setIndex(idx)
                }}>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}

export default ImageCarousel;