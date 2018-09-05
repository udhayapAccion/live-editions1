import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeBody from '../../modules/marketplace/home/components/HomeBody'

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
                    <MarketPlaceHomeBody />
                </Col>
            </Row>
        )
    }
}

export default Body