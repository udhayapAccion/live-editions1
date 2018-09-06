import React, { Component } from 'react';
import './../sass/Footer.css'
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
                <Row className="app-footer">
                    <Col span={24} >
                        <Row className="_footer-links" type="flex">
                             <Col xs={24} sm={12}  md={8} lg={6}>
                                <div className="_items _head">Footer Head</div>
                                <div className="_items">Lorem Ipsum</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                             </Col>
                             <Col xs={24} sm={12}  md={8} lg={6}>
                                <div className="_items _head">Footer Head</div>
                                <div className="_items">Lorem Ipsum</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                             </Col>
                             <Col xs={24} sm={12}  md={8} lg={6}>
                                <div className="_items _head">Footer Head</div>
                                <div className="_items">Lorem Ipsum</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                             </Col>
                             <Col xs={24} sm={12}  md={8} lg={6}>
                                <div className="_items _head">Footer Head</div>
                                <div className="_items">Lorem Ipsum</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                                <div className="_items">Lorem Ipsum is simply</div>
                             </Col>
                        </Row>
                        <div style={{height:'96px', display:'flex', color:'#939396', flexDirection:'column',alignItems:'center', justifyContent:'center',backgroundColor:'#181818'}}>
                         <label>Live Editions, Inc. © 2018 All right reserved | 2890 Kilgore Rd, Suite 165 Rancho Cordova CA 95670 |</label>
                         <label>www.liveditions.com</label>
                        </div>
                    </Col>
                </Row>
        )
    }
}
export default Footer