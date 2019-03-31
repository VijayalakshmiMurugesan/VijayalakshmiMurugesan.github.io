import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import shaka from 'shaka-player';

import './_video_player.css';

class VideoPlayer extends Component {
	constructor() {
		super();

		this._references = {
			video: React.createRef()
		};

		this.state = {
			url: '',
			active: false
		};
	}

	componentDidUpdate(prevState) {
		const { url, active } = this.state;

		if (prevState.active !== active && active) {
			this._initPlayer();
		}
	}

	render() {
		const { active } = this.state;
		
		if (!active) {
			return null;
		}

		return (
			<div className="video-player">
				<div className="overlay" onClick={this.hide}></div>
				<div className="content">
					<video
						ref={this._references.video}
						width="640"
						controls
						autoPlay
					>
					</video>
				</div>
			</div>
		);
	}

	show(url) {
		this.setState({ active: true, url });
	}

	hide = () => {
		this.setState({ active: false, url: '' });
	}

	/* Private functions */
	_initPlayer() {
		const video = ReactDOM.findDOMNode(this._references.video.current);
		const player = new shaka.Player(video);
	
		player.addEventListener('error', this._onErrorEvent);
	
		const { url } = this.state;

		player.load(url).then(function() {
		  // This runs if the asynchronous load is successful.
		  console.log('The video has now been loaded!');
		}).catch(this._onError);
	  }
	
	  _onErrorEvent = (event) => {
		// Extract the shaka.util.Error object from the event.
		this._onError(event.detail);
	  }
	  
	  _onError = (error) => {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	  }
}

export default VideoPlayer;
