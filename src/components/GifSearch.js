import React from 'react'

class GifSearch extends React.Component {

  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={'searchInput'}>Enter a search term:</label>
        <input 
          type='text' 
          name='searchInput' 
          value={this.state.searchTerm}
          onChange={this.handleChange}
        /><br/>
        <input type='submit' value='Find Gifs'/>
      </form>
    )
  }
}

export default GifSearch