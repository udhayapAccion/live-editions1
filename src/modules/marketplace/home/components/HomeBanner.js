import React from 'react';
import '../../style.scss'
import { Row, Col } from 'antd';

const HomeBanner = () => (
    <div>
        <Row>
            <Col span={24} >
                {/* <div style={{height:'450px', backgroundColor:'#912444'}} /> */}
                <img src={require(`../../../../assets/maketplace-home-banner.png`)} />
            </Col>
        </Row>
    </div>
)

export default HomeBanner;