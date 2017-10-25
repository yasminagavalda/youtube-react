import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import VideoList from './Components/VideoList'
import MenuBar from './Components/MenuBar'
import VideoPlayer from './Components/VideoPlayer'
import axios from 'axios'


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			videos: []
		}
	}

	search(query) {

	  const url = `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${query}&key=AIzaSyCiOQBjMZ8vE8l07wF5F96XgU8cRG2tbGk`

	  const promise = axios.get(url)
	  
	  promise.then(response => {
	    const items = response.data.items

	    const videos = items
	    	.filter(v => v.id.kind === "youtube#video")
	    	.map(v => (
			    {
			      id: v.id.videoId,
			      title: v.snippet.title,
			      image: v.snippet.thumbnails.medium.url
			    }
  			))

	    this.setState( { videos: videos } )
	  })

	  promise.catch(error => console.log(error))
	}

	
  render() {
  	return (
  		<div>

  			<BrowserRouter>
  				<div>
	  				<Route render={(context) => 
	  					<MenuBar onSearch={(value) => { 
	  						this.search(value)
	  						context.history.push('/') 
	  					}} />
	  				} />
	  				<Switch>
	  					<Route exact path='/' render={() => <VideoList videos={this.state.videos} />} />
	  					<Route path='/detail/:id' component={VideoPlayer} />
	  				</Switch>
  				</div>
  			</BrowserRouter>
		    
	    </div>
	  )

	}
  
  
}


export default App
