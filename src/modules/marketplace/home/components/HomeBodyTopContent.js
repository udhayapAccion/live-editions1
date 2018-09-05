import React from 'react';
import './../sass/HomeBodyTopContent.css'
import { Row, Col, Input } from 'antd';

const HomeBodyTopContent = () => (
        <Row type='flex' justify='center' className="home-body-top-content">
            <Col span={24} >
                <div className="_body">
                    <div className="_title">Follow your path to Success!</div>
                    <div className="_sub-title">Career Education Pathways to Economic and Career Mobility</div>
                    <div className="_sub-title-1">Providing Career Pathways from K-12 and Adult Education to the Workforce</div>
                    <div className="_search">
                        <Input className="_input" placeholder='What do you want to learn today? What is your dream job?'></Input>
                    </div>
                </div>
            </Col>
        </Row>
)

export default HomeBodyTopContent;