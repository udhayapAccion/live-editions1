import React from 'react';
import { Row, Col } from 'antd';

const CareerPathWayBanner = () => (
    <div>
        <Row>
            <Col span={24} >
                {/* <div style={{height:'450px', backgroundColor:'#912444'}} /> */}
                <img style={{height: '100%', minHeight:'450px', width:'100%'}} src={require(`../../../../assets/maketplace-home-banner.png`)} />
            </Col> 
        </Row>
    </div>
)

export default CareerPathWayBanner;