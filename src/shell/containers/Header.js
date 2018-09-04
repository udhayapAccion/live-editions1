import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHeader from '../../modules/marketplace/components/MarketPlaceHeader'

class Header extends Component {
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
                    <MarketPlaceHeader />
                </Col>
            </Row>
        )
    }
}

export default Header