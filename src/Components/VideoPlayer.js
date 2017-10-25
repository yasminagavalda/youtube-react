import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = (props) => {

	const videoId = props.match.params.id

  return (
  	<div className="video-player">
  		<iframe 
	  		title={videoId}
	  		width="854" height="480" 
	  		src={"https://www.youtube.com/embed/" + videoId} 
	  		frameBorder="0" allowFullScreen>
	  	</iframe>
	  </div>

  )
}


export default VideoPlayer