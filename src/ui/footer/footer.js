// Footer Component
import React, { Component } from 'react';
import { FaFacebook, FaPinterest, FaTwitter, FaLinkedin } from '../../../node_modules/react-icons/fa';

import './_footer.css';
import FooterItem from '../footer_item/footer_item.js';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="topcont">
                    <div className="leftcont">
                        <span className="title">LOGO</span>
                        <span>&copy;2017 Mobiotics.All rights reserved.</span>
                    </div>
                    <div className="rightcont">
                        <span>About</span>
                        <span>Help</span>
                        <span>Terms and Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Support</span>
                    </div>
                </div>
                <div className="bottomcont">
                    <div className="left">
                        <FooterItem
                            subtitle="Download on the"
                            title="App Store"
                        />
                        <FooterItem
                            subtitle="GET IT ON"
                            title="Google Play"   
                        />
                    </div>
                    <div className="right">
                        <span>Connect with us</span>
                        <span className="icon-facebook"><FaFacebook /></span>
                        <span className="icon-facebook"><FaPinterest /></span>
                        <span className="icon-facebook"><FaTwitter /></span>
                        <span className="icon-facebook"><FaLinkedin /></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
