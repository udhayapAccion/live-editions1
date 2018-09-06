import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeBanner from '../../modules/marketplace/home/components/HomeBanner'

class Banner extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render(){
        return(
            <Row className="app-banner full-vh">
                <Col span={24}>
                    <MarketPlaceHomeBanner />
                </Col>
            </Row>
        )
    }
}

export default Banner