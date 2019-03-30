// FooterItem Component
import React, { Component } from 'react';

import './_footer_item.css';

class FooterItem extends Component {
    render() {
        const { subtitle, title, icon } = this.props;

        return (
            <div className="footer-item">
                <div className="leftcont">
                    
                </div>
                <div className="rightcont">
                    <div className="subtitle">
                        {subtitle}
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
            </div>
        );
    }
} 

export default FooterItem;
