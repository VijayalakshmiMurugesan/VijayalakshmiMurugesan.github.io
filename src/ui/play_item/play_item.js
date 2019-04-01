//PlayItem Component
import React, { Component } from 'react';
import { FaPlay } from 'react-icons/fa';

import './_play_item.css';

class PlayItem extends Component {
    render() {
        const { description, title, noViews, lastSeen, imageUrl } = this.props;

        return (
            <div className="play-item">
                <div className="headerinfo" onClick={this._onPlay}>
                    <div className="image">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="overlay">
                        <FaPlay />
                    </div>
                </div>
                <div className="continfo">
                    <div className="title">
                        <span>{title}</span>
                    </div>
                    <div className="description">
                        <span>{description}</span>
                    </div>
                    <div className="view">
                        <span className="view-count">{noViews} views</span>
                        <span></span>
                        <span>{this._formatDate(lastSeen)}</span>
                    </div>
                </div>
            </div>
        );
    }

    /* Event Handlers */
    _onPlay = () => {
        const { videoUrl, onPlay } = this.props;

        if (onPlay) {
            onPlay(videoUrl);
        }
    }

    /* Private functions */
    _formatDate = (date) => {
        const dateDiff = Math.round((new Date() - date) / (1000 * 60 * 60 * 24));

        if (dateDiff <= 1) {
            return 'today';
        } else if (dateDiff < 7) {
            return `${dateDiff} days ago`;
        } else if (dateDiff < 30) {
            return `${Math.round(dateDiff / 7)} weeks ago`;
        } else if (dateDiff < 365) {
            return `${Math.round(dateDiff / (30))} months ago`;
        } else if (dateDiff > 365) {
            return `${Math.round(dateDiff / 365)} years ago`;
        }
    }
}

export default PlayItem;
