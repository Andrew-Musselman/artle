import React, { useState, useEffect } from 'react';
import GameScreen from './GameScreen';
import GuessForm from './GuessForm';
import CorrectScreen from './CorrectScreen';
import getData from './apiCall';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistBio, setArtistBio] = useState('');
  const [titles, setTitles] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [viewableImages, setViewableImages] = useState([]);


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
     setViewableImages([...viewableImages, paintings[0]])
    console.log (images)
    console.log(viewableImages)
   }

   const checkGuess = (guess) => {
    const artistNames =  artistName.split(' ')
    setGuesses([...guesses, guess])
     if( guess === artistName || guess === artistNames[0] || guess === artistNames[1] || 
        guess === artistName.toLowerCase() || guess === artistNames[0].toLowerCase() || guess === artistNames[1].toLowerCase()) {
       setCorrectGuess(true)
       setGameOver(true)
       console.log('correct!')
     } else {
       console.log('WRONG!')
     }
   }

   const playGame = (guess) => {
     console.log(guessCount)
     if (guessCount <= 4 && !correctGuess){
       checkGuess(guess)
       setGuessCount((prevCount) => prevCount + 1)
       setViewableImages([...viewableImages, images[guessCount +1]])
     } else if (guessCount === 5 && !correctGuess) {
      checkGuess(guess)
      setGuessCount((prevCount) => prevCount + 1)
      setGameOver(true)
     }
   }

  useEffect(() => {
    getObjectDetails()
  }, [])

  
  
    return (
      <div className='App'>
        {!correctGuess && !gameOver && <GameScreen images={viewableImages} /> } 
        {correctGuess && gameOver && <CorrectScreen artistName={artistName} artistBio={artistBio} images={images}/>}
        <GuessForm playGame={playGame} /> 
      </div>
    );
  
}

export default App;
