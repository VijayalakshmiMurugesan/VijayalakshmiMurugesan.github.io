//PlayItem Component
import React, { Component } from 'react';
// import { TiTick } from '../../../node_modules/react-icons/ti';
import shaka from 'shaka-player';

import './_play_item.css';

class PlayItem extends Component {
    render() {
        const { description, title, views, lastseen } = this.props;

        return (
            <div className="play-item">
                <video
                    id="video"
                    width="225"
                    poster="../../shaka-player-logo.png"
                    controls autoplay>
                </video>
                <div className="video-info">
                    <div className="desc">
                        {description}
                    </div>
                    <div className="info">
                        <div className="title">
                            <span>{title}</span>
                        </div>
                        <div className="view">
                            <span className="view-count">{views}</span>
                            <span></span>
                            <span>{lastseen}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayItem;
