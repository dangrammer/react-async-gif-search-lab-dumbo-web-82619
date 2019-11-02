import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }
  
  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (query =  "puppies") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(imagesObj => {
      this.setState({
        gifs: imagesObj.data.slice(0, 5)
      })
    })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer