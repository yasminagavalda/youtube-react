import React, { Component } from 'react'
import VideoList from './Components/VideoList'
import axios from 'axios'


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			inputValue: "",
			videos: []
		}

		this.search()
	}

	search(query) {

	  const url = `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${query}&key=AIzaSyCiOQBjMZ8vE8l07wF5F96XgU8cRG2tbGk`

	  const promise = axios.get(url)
	  
	  promise.then(response => {
	    const items = response.data.items

	    const videos = items
	    	.filter(v => v.id.kind === "youtube#video")

	    this.setState( { videos: videos } )
	  })

	  promise.catch(error => console.log(error))
	}

  render() {
  	return (
  		<div>
	  		<input 
	  			value={this.state.inputValue} 
	  			onChange={(event) => {
	  				console.log(event)
	  				this.setState( { inputValue: event.target.value} )}}/> 
	  		<button 
	  			onClick={() => this.search(this.state.inputValue) }>
	  			Search
	  		</button>
		    <VideoList videos={this.state.videos} />
	    </div>
	  )
  }
  
}


export default App
