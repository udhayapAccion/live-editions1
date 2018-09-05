import React, { Component } from 'react';
import '../style.scss'
import { Row, Col, Input } from 'antd';
import { Button } from 'antd';

class MarketPlaceBodyMainContent extends Component {
    constructor(state) {
        super(state);
        this.state = {
            items: [
                { title: "Career Pathways", subtext: 'Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.' },
                { title: "HS/ROP Programs", subtext: 'Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.' },
                { title: "Create Career Plan", subtext: 'Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.' }
            ]
        }
    }

    render() {
        return (
            <div className="future-component">
                <div className="_ttl-bar">
                    <div className="_ttl">Explore Your Future</div>
                    <div className="_sub-ttl">Select a category to help navigate your career options.</div>
                    <div className="divider-x primary" style={{ width: '10%', marginTop: '11px' }}></div>
                </div>
                <div className="_body">
                    <Row gutter={24} >
                        {this.state.items.map((item, index) =>
                            <Col xs={24} sm={12} lg={8} key={index} >
                                <div className="_item">
                                    <div className="_avtr"></div>
                                    <div className="_ttl">{item.title}</div>
                                    <div className="_sub-ttl">{item.subtext}</div>
                                    <Button type="primary" className="_action">EXPLORE</Button>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        );
    }
}

export default MarketPlaceBodyMainContent;