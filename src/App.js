import React, { Component } from 'react'
import VideoList from './Components/VideoList'
import axios from 'axios'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			videos: []
		}

		this.initialize()
	}

	initialize() {

		const query = `radiohead`
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
	    <VideoList videos={this.state.videos} />
	  )
  }

  
  

  
}


export default App
