import React, { Component } from 'react';
import '../style.scss'

import MarketPlaceHomeBody from '../../modules/marketplace/home/containers/homeBody';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render() {
        return (
            <div className="app-container">
                <MarketPlaceHomeBody />
            </div>
        )
    }
}

export default Body;