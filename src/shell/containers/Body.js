import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeBody from '../../modules/marketplace/home/components/HomeBody'
import Banner from './Banner'

class Body extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render(){
        return(
            <div className="app-container">
              <MarketPlaceHomeBody/>
            </div>
        )
    }
}

export default Body