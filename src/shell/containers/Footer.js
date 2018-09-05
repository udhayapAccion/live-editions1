import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeFooter from '../../modules/marketplace/home/components/HomeFooter'

class Footer extends Component {
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
                    <MarketPlaceHomeFooter />
                </Col>
            </Row>
        )
    }
}

export default Footer