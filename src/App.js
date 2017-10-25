import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import VideoList from './Components/VideoList'
import MenuBar from './Components/MenuBar'
import VideoPlayer from './Components/VideoPlayer'
import YoutubeUtil from './utils/YoutubeUtil'
import axios from 'axios'


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			videos: [],
			loading: false
		}
	}

	search(query) {

	  const url = `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${query}&key=AIzaSyCiOQBjMZ8vE8l07wF5F96XgU8cRG2tbGk`


	  const promise = axios.get(url)

	  this.setState({loading: true})
	  
	  promise.then(response => {

	    const videos = YoutubeUtil.extractVideos(response.data)

	    this.setState( { videos: videos, loading: false } )
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
	  					<Route exact path='/' render={() => {

	  						if (this.state.loading) {
	  							return <div className="loading-view"><span className="loading">Loading...</span></div>
	  						} else {
	  							return <VideoList videos={this.state.videos} />}
	  						}} />

	  					<Route path='/detail/:id' component={VideoPlayer} />
	  				</Switch>
  				</div>
  			</BrowserRouter>
		    
	    </div>
	  )

	}
  
  
}


export default App
