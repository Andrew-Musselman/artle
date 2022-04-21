import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import GuessForm from './GuessForm';
import getData from './apiCall';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistBio, setArtistBio] = useState('');
  const [titles, setTitles] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false)


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

   const checkGuess = (guess) => {
    const artistNames =  artistName.split(' ')
     if( guess == artistName || guess == artistNames[0] || guess == artistNames[1]) {
       setCorrectGuess(true)
       console.log('correct!')
     } else {
       console.log('WRONG!')
     }
   }

  useEffect(() => {
    getObjectDetails()
  }, [])

  
  
    return (
      <div className='App'>
        <ImageCarousel images={images} titles={titles} />
        <GuessForm checkGuess={checkGuess} /> 
      </div>
    );
  
}

export default App;
