import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceBanner from '../../modules/marketplace/components/MarketPlaceBanner'

class Banner extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render(){
        return(
            <Row>
                <Col span={24}>
                    <MarketPlaceBanner />
                </Col>
            </Row>
        )
    }
}

export default Banner