import React from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceBodyTopContent from './MarketPlaceBodyTopContent';
import MarketPlaceBodyBottomContent from './MarketPlaceBodyBottomContent';
import MarketPlaceBodyMainContent from './MarketPlaceBodyMainContent';

const MarketPlaceBody = () => (
    <div>
        <Row type='flex' justify='center'>
            <Col span={22} >
                <MarketPlaceBodyTopContent />
                <MarketPlaceBodyMainContent />
                <MarketPlaceBodyBottomContent />
           </Col>
        </Row>
    </div>
)

export default MarketPlaceBody;