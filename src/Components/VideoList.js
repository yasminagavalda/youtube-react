import React from 'react'
import { Link } from 'react-router-dom'
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = (props) => {

	const videoItems = props.videos.map(v =>
    <Link to={"/detail/" + v.id}>
      <VideoItem key={v.id} video={v}/>
    </Link>
  )

  return (
  	<div className="video-list">{videoItems}</div>
  )
}


export default VideoList