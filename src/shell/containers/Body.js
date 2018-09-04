import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceBody from '../../modules/marketplace/components/MarketPlaceBody'

class Body extends Component {
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
                    <MarketPlaceBody />
                </Col>
            </Row>
        )
    }
}

export default Body