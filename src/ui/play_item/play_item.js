//PlayItem Component
import React, { Component } from 'react';
// import { TiTick } from '../../../node_modules/react-icons/ti';
import shaka from 'shaka-player';

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
                </div>
                <div className="continfo">
                    <div className="title">
                        <span>{title}</span>
                    </div>
                    <div className="view">
                        <span className="view-count">{noViews}</span>
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
        return date.toString();
    }
}

export default PlayItem;
