import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeBody from '../../modules/marketplace/home/components/HomeBody'
import MarketPlaceCareerPathWayBody from '../../modules/marketplace/careerpathway/components/CareerPathWayBody'
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
              <MarketPlaceCareerPathWayBody/>
            </div>
        )
    }
}

export default Body;