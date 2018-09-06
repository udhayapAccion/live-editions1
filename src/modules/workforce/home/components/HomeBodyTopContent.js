import React from 'react';
import './../sass/HomeBodyTopContent.css'
import { Row, Col, Input } from 'antd';

const HomeBodyTopContent = (props) => (
    <Row type='flex' justify='center' className="home-body-top-content">
        <Col span={24} >
            <div className="_body anim-slide-up">
                <div className="_title">
                    {props.info ? props.info.title : ",Follow your path to Success!"}
                </div>
                <div className="_sub-title">
                    {props.info ? props.info.subtitle : ",Career Education Pathways to Economic and Career Mobility"}
                </div>
                <div className="_sub-title-1">
                    {props.info ? props.info.message : ",Providing Career Pathways from K-12 and Adult Education to the Workforce"}
                </div>
                <div className="_search">
                    <Input className="_input" placeholder='What do you want to learn today? What is your dream job?'></Input>
                </div>
            </div>
        </Col>
    </Row>
)

export default HomeBodyTopContent;