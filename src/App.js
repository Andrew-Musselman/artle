import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GameStats from './GameStats';
import Nav from './Nav';
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
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);


  const getObjects = async () => {
    const artistPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Renoir'
    let response;
    try {
      response = await getData(artistPath);
    } catch {
      setHasError(true)
      setErrorMessage('Something went wrong!')
    } finally {
      return await response
    }
  }

  const getTopSixObjects = async () => {
    let objects;
    let topSixObjects;
    try {
      if (!hasError) {
        objects = await getObjects()
        topSixObjects = await objects.objectIDs.slice(0, 6)
      }
    } catch {
      setHasError(true)
      setErrorMessage('Something went wrong!')
    } finally {
      return await topSixObjects
    }
  }

  const getObjectDetails = async () => {
    let objectsMapped = []
    let objects;  
    try {
      objects = await getTopSixObjects()
      for (const objectID of objects) {
        const singleObjectDetails = await getData(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
        objectsMapped.push(singleObjectDetails)
      } 
    } catch {
      setHasError(true)
      setErrorMessage('Something went wrong!')
    } finally {
      return objectsMapped
    }
    
  }
const setInitialStates = async () => {
  let paintings;
  let names;
  let artist;
  let bio;
  try {
    let objectsMapped = await getObjectDetails()
    paintings = await objectsMapped.map(object => object.primaryImage)
    names = await objectsMapped.map(object => object.title)
    artist = await objectsMapped[0].artistDisplayName
    bio = await objectsMapped[0].artistDisplayBio
    setImages(paintings)
    setTitles(names)
    setArtistName(artist)
    setArtistBio(bio)
    setViewableImages([...viewableImages, paintings[0]])
  } catch {
    setHasError(true)
    setErrorMessage('Something went wrong!')
  }
}


  const checkGuess = (guess) => {
    const artistNames =  artistName.split(' ')
    setGuesses([...guesses, guess])
    if( guess === artistName || guess === artistNames[0] || guess === artistNames[1] || 
        guess === artistName.toLowerCase() || guess === artistNames[0].toLowerCase() || guess === artistNames[1].toLowerCase()) {
      setCorrectGuess(true)
      setGameOver(true)
      setWinCount((prevCount) => prevCount + 1)
    } else {
      return 
    }
  }

  const playGame = (guess) => {
    if (guessCount <= 4 && !correctGuess){
      checkGuess(guess)
      setGuessCount((prevCount) => prevCount + 1)
      setViewableImages([...viewableImages, images[guessCount +1]])
    } else if (guessCount === 5 && !correctGuess) {
      checkGuess(guess)
      setGuessCount((prevCount) => prevCount + 1)
      setLossCount((prevCount) => prevCount + 1)
      setGameOver(true)
    }
  }

  useEffect(() => {
    setInitialStates()
  }, [])

  
  
    return (
      <div className='App'>
        <Nav />
        <Route exact path='/' render={() => {
          return (<Home 
          hasError={hasError}
          gameOver={gameOver}
          errorMessage={errorMessage}
          correctGuess={correctGuess}
          viewableImages={viewableImages}
          artistName={artistName}
          artistBio={artistBio}
          images={images} 
          titles={titles}
          playGame={playGame}
          />
        )}} />
        <Route path='/About' component={ About } />
        <Route path='/GameStats' render={() => {
          return <GameStats winCount={winCount} lossCount={lossCount} /> 
          }
        } />
      </div>
    );
  
}

export default App;
