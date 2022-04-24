import React, { useState } from 'react';
import Image from './Image';
import PropTypes, { string } from 'prop-types'
import './ImageCarousel.css';

const ImageCarousel = ({ images, titles }) => {

    const imagesOne = images.map((image, i) => {
        return <Image image={image} alt={titles[i]}  />
    })

    const [index, setIndex] = useState(0);

    return (
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
      )
}

ImageCarousel.defaultProps = {
  titles: ['image-title','image-title','image-title','image-title','image-title','image-title']
}

export default ImageCarousel;

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(string).isRequired,
  titles: PropTypes.arrayOf(string).isRequired
}