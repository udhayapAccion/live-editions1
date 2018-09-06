import React from 'react';
import './../sass/CareerPathWayBodyTopContent.css'
import { Row, Col, Input } from 'antd';

const CareerPathWayBodyTopContent = () => (
        <Row type='flex' justify='center' className="home-body-top-content app-banner-common style-text">
            <Col span={24} >
                <div className="_body anim-slide-up">
                    <div className="_title">Career Pathway</div>
                    <div className="_sub-title">Career Education Pathways to Economic and Career Mobility</div>
                    <div className="_sub-title-1">Providing Career Pathways from K-12 and Adult Education to the Workforce</div>
                </div>
            </Col>
        </Row>
)

export default CareerPathWayBodyTopContent;