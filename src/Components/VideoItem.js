import React from 'react';

const VideoItem = (props) => {

  return (
  	<div>
	  	<h1>{props.title}</h1>
	  	<iframe 
	  		title={props.title}
	  		width="854" height="480" 
	  		src={"https://www.youtube.com/embed/" + props.videoId} 
	  		frameBorder="0" allowFullScreen>
	  	</iframe>
	  </div>

  )
}


export default VideoItem