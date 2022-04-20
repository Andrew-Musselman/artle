import React, { Component } from 'react';
import getData from './apiCall';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      objects: []
    }
  }


  getObjects = async () => {
    const artistPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Renoir'
    const response = await getData(artistPath);
    return await response
  }

  getTopSixObjects = async () => {
    const objects = await this.getObjects()
    const topSixObjects = await objects.objectIDs.slice(0, 6)
    return await topSixObjects
   }

  getObjectDetails = async () => {
    const objectsMapped = []
    const objects = await this.getTopSixObjects()
    for (const objectID of objects) {
      const singleObjectDetails = await getData(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
      objectsMapped.push(singleObjectDetails)
    }
     console.log(await objectsMapped)
   }

  componentDidMount() {
    this.getObjectDetails()
    
  }

  render() {
    console.log(this.state.objects)
    return (
      <>
        
      </>
    );
  }
}

export default App;
