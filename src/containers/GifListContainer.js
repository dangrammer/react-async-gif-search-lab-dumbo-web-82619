import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    gifSelection: []
  }
  
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then(imagesObj => {
      this.setState({
        gifs: imagesObj.data
      })
    })
  }

  handleSubmit = (event, term) => {
    event.preventDefault()
    
    this.setState({
      gifSelection: this.state.gifs.filter(gif => gif.title.includes(event.target.searchInput.value))
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifSelection}/>
      </div>
    )
  }
}

export default GifListContainer