import React from 'react';

const VideoItem = (props) => {
  return (
  	<div>
  		<div>{props.video.title}</div>
	  	<img src={props.video.image} alt={props.video.title} />
	  </div>

  )
}


export default VideoItem