import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} >
                        <div className="le-footer-top-container">
                            <Row gutter={24} >
                                <Col className="le-footer-content" xs={24} sm={12} lg={6}>
                                    <label className="le-footer-content-head">Footer Head</label>
                                </Col>
                                <Col className="le-footer-content" xs={24} sm={12} lg={6}>
                                    <label className="le-footer-content-head">Footer Head</label>
                                </Col>
                                <Col className="le-footer-content" xs={24} sm={12} lg={6}>
                                    <label className="le-footer-content-head">Footer Head</label>
                                </Col>
                                <Col className="le-footer-content" xs={24} sm={12} lg={6}>
                                    <label className="le-footer-content-head">Footer Head</label>
                                </Col>
                            </Row>
                        </div>
                        <div className="le-footer-bottom-container">
                            <label className="le-footer-company-info">Live Editions, Inc. © 2018 All right reserved | 2890 Kilgore Rd, Suite 165 Rancho Cordova CA 95670 |</label>
                            <label>www.liveditions.com</label>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Footer