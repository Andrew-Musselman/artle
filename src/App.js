import React, { useState, useEffect } from 'react';
import Image from './Image';
import getData from './apiCall';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistBio, setArtistBio] = useState('');
  const [titles, setTitles] = useState([]);


  const getObjects = async () => {
    const artistPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Renoir'
    const response = await getData(artistPath);
    return await response
  }

  const getTopSixObjects = async () => {
    const objects = await getObjects()
    const topSixObjects = await objects.objectIDs.slice(0, 6)
    return await topSixObjects
   }

  const getObjectDetails = async () => {
    const objectsMapped = []
    const objects = await getTopSixObjects()
    for (const objectID of objects) {
      const singleObjectDetails = await getData(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
      objectsMapped.push(singleObjectDetails)
    }
    const paintings = objectsMapped.map(object => object.primaryImage)
    const names = objectsMapped.map(object => object.title)
    const artist = objectsMapped[0].artistDisplayName
    const bio = objectsMapped[0].artistDisplayBio
    setImages(paintings)
    setTitles(names)
    setArtistName(artist)
    setArtistBio(bio)
     console.log (images)
   }

  useEffect(() => {
    getObjectDetails()
  }, [])

  
  
    return (
      <div className='App'>
        <Image image={images[0]} alt={images[0]} />
      </div>
    );
  
}

export default App;
