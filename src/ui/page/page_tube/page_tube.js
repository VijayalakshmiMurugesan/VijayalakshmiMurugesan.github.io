// PageTube Component
import React, { Component } from 'react';
import { FaMusic } from '../../../../node_modules/react-icons/fa';

import './_page_tube.css'; 

import PlayItem from '../../play_item/play_item.js';

class PageTube extends Component {
    render() {
        const { type } = this.props;

        return (
            <div className="page-tube">
                <div className="video-type">
                    <span className="music-icon"><FaMusic /></span>
                    <span>{type}</span>
                </div>
                 <div className="item">
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="TrendMusic"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="SIMMBA: | Aankh Marey| Ranveer singh, Sara Ali Kha"
                        title="T-Series"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                    <PlayItem
                        description="Nee venakale Nadichi Music Video | Vijay Devarakonda | Naina"
                        title="Trend Music"
                        views="5.5M Views"
                        lastseen="3 Weeks ago"
                    />
                </div>
            </div>
        );
    }
}

export default PageTube;
