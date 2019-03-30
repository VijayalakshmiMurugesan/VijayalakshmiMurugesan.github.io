// Header Component

import React, { Component } from 'react';
import { FaBars, FaSearch, FaBell, FaGlobe, FaAngleDown } from '../../../node_modules/react-icons/fa';

import './_header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="leftcont">
                    <span className="bars-icon"><FaBars /></span>
                    <span><img src="../../../public/images/logo.png" /></span>
                    <span className="title">LOGO</span>
                </div>
                <div className="rightcont">
                    <span className="search-icon"><FaSearch /></span>
                    <span className="notification-icon"><FaBell /></span>
                    <span className="globe-icon"><FaGlobe /></span>
                    <span className="down-icon"><FaAngleDown /></span>
                </div>
            </div>
        );
    }
}

export default Header;
