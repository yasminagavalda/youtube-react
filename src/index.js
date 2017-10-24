import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


	  	// <iframe 
	  	// 	title={props.title}
	  	// 	width="854" height="480" 
	  	// 	src={"https://www.youtube.com/embed/" + props.videoId} 
	  	// 	frameBorder="0" allowFullScreen>
	  	// </iframe>