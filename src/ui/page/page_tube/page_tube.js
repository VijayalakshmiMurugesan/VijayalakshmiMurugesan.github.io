// PageTube Component
import React, { Component } from 'react';
import { FaMusic } from 'react-icons/fa';
import shaka from 'shaka-player';

import './_page_tube.css'; 

import PlayItem from '../../play_item/play_item.js';
import VideoPlayer from '../../video_player/video_player';

class PageTube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    icon: FaMusic,
                    title: 'Music',
                    items: [
                        {
                            title: 'Movie title',
                            description: 'Movie description',
                            noViews: 3,
                            lastSeen: new Date(),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
                            videoUrl: 'http://dash.akamaized.net/dash264/TestCases/2c/qualcomm/2/MultiRes.mpd'
                        },
                        {
                            title: 'Movie title 2',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
                            videoUrl: 'http://dash.akamaized.net/dash264/TestCasesIOP41/MultiTrack/associative_content/1/manifest_associated_content_live.mpd'
                        },
                    ]
                }
            ]
        };

        this._references = {
            player: React.createRef()
        };
    }

    componentDidMount() {
        this._initShakaPlayer();
    }

    render() {
        const { categories } = this.state;

        return (
            <div className="page-tube">
                 <div className="content">
                    {categories.map((category) =>
                        <div className="categoryitem">
                            <div className="video-type">
                                <span className="music-icon">{category.icon}</span>
                                <span>{category.title}</span>
                            </div>
                            <div className="catcont">
                                {category.items.map((item) =>
                                    <PlayItem
                                        description={item.description}
                                        title={item.title}
                                        views={item.noViews}
                                        lastSeen={item.lastSeen}
                                        imageUrl={item.imageUrl}
                                        videoUrl={item.videoUrl}
                                        onPlay={this._onPlayVideo}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <VideoPlayer ref={this._references.player} />
            </div>
        );
    }

    /* Event handlers */
    _onPlayVideo = (url) => {
        if (this._references.player) {
            this._references.player.current.show(url);
        }
    }

    /* Private functions */
    _initShakaPlayer() {
        shaka.polyfill.installAll();
    }
}

export default PageTube;
