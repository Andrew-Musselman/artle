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


  componentDidMount() {
    this.getImages().then(data => this.setState({objects: data.objectIDs.slice(0, 6)}))
    
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
