// PageTube Component
import React, { Component } from 'react';
import { FaMusic, FaFilm } from 'react-icons/fa';
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
                    icon: <FaMusic />,
                    title: 'Music',
                    items: [
                        {
                            title: 'Zayin - There you are - HD Video',
                            description: 'Movie description',
                            noViews: 3,
                            lastSeen: new Date(2019, 2, 26),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
                            videoUrl: 'https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/2/MultiRes.mpd'
                        },
                        {
                            title: 'Good work never fails - Song 1',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(2019, 0, 14),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
                            videoUrl: 'https://dash.akamaized.net/dash264/TestCasesIOP41/MultiTrack/associative_content/1/manifest_associated_content_live.mpd'
                        },
                        {
                            title: 'Kayal - Unna ippo pakkanum - Video song',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(2017, 0, 14),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
                            videoUrl: 'http://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd'
                        },
                        {
                            title: 'Vanakkam Chennai - Un kaigal korthu HD',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(2019, 2, 5),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
                            videoUrl: 'http://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd'
                        },
                        {
                            title: 'Kayal - Unna ippo pakkanum - Video song',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(2017, 0, 14),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
                            videoUrl: 'http://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd'
                        },
                    ]
                },
                {
                    icon: <FaFilm />,
                    title: 'Trailers',
                    items: [
                        {
                            title: 'Avengers - Official trailer',
                            description: 'Movie description',
                            noViews: 3,
                            lastSeen: new Date(2019, 2, 26),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
                            videoUrl: 'https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/2/MultiRes.mpd'
                        },
                        {
                            title: 'Petta - Official trailer',
                            description: 'Movie description 2',
                            noViews: 3,
                            lastSeen: new Date(2019, 0, 14),
                            imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
                            videoUrl: 'https://dash.akamaized.net/dash264/TestCasesIOP41/MultiTrack/associative_content/1/manifest_associated_content_live.mpd'
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
                                        noViews={item.noViews}
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
