import React from 'react';
import '../../style.scss'
import { Row, Col } from 'antd';
import HomeBodyTopContent from './HomeBodyTopContent';
import HomeBodyBottomContent from './HomeBodyBottomContent';
import HomeBodyMainContent from './HomeBodyMainContent';

const HomeBody = () => (
    <div>
        <Row type='flex' justify='center'>
            <Col span={22} >
                <HomeBodyTopContent />
                <HomeBodyMainContent />
                <HomeBodyBottomContent />
           </Col>
        </Row>
    </div>
)

export default HomeBody;