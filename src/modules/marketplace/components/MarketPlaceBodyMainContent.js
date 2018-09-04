import React from 'react';
import '../style.scss'
import { Row, Col, Input } from 'antd';

const MarketPlaceBodyMainContent = () => (
    <div>
        <Row type='flex' justify='center'>
            <Col span={24} >
                <div style={{textAlign:'center', border:'1px solid', height:'500px', paddingTop:'20px', paddingBottom:'20px', backgroundColor:'#FFFFFF'}}>
                    <span style={{fontSize:24, fontWeight:600, lineHeight:2}}>Explore your Future</span><br/>
                    <span style={{fontSize:16, fontWeight:300, lineHeight:2}}>Select category to help navigate your career options</span><br/>
                    <span style={{height:'400px'}} />
                </div>
            </Col>
        </Row>
    </div>
)

export default MarketPlaceBodyMainContent;