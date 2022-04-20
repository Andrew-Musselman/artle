import React, { Component } from 'react';
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
    const response = await fetch(artistPath);
    return await response.json();
  }

  getTopSixObjects = async () => {
    const objectIds = await this.getObjects()
    const topSixObjects = await objectIds.objectIDs.slice(0, 6)
    return await topSixObjects
   }

   getObjectDetails = async () => {
     const objectsMapped = []
    const objects = await this.getTopSixObjects()
    const objectDetails = await objects.forEach(object => {
      return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`).then(data => console.log(data))
     })
     console.log(await objectDetails)
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
