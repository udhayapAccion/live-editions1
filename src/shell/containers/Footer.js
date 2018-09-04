import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceFooter from '../../modules/marketplace/components/MarketPlaceFooter'

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
                    <MarketPlaceFooter />
                </Col>
            </Row>
        )
    }
}

export default Footer