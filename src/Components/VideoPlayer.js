import React from 'react'
import axios from 'axios'
import './VideoPlayer.css'

export default class VideoPlayer extends React.Component {
	
	constructor (props) {
		super(props)

		this.state = {
			videoId: props.match.params.id,
			title: ""

		}

		const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.videoId}&key=AIzaSyCiOQBjMZ8vE8l07wF5F96XgU8cRG2tbGk`

		axios.get(url).then(r => {
			const items = r.data.items
			if (items.length > 0) {
				const title = items[0].snippet.title
				this.setState({title: title})
			}
		})
	}

	
	render () {
		return (
	  	<div className="video-player">
	  		<h1>{this.state.title}</h1>
	  		<iframe 
		  		title={this.state.title}
		  		width="854" height="480" 
		  		src={"https://www.youtube.com/embed/" + this.state.videoId} 
		  		frameBorder="0" allowFullScreen>
		  	</iframe>
		  </div>
	  )
	}
  
}
