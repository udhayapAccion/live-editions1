import React from 'react';
import './../sass/HomeBodyBottomContent.css'
import { Row, Col, Input } from 'antd';

const HomeBodyBottomContent = () => (
        <Row type='flex' justify='center' className="home-body-bottom-content">
            <Col span={24} >
                <div className="_body">
                    <div className="_ttl-bar">
                        <div className="_ttl">What our students have to say</div>
                        <div className="_sub-ttl">Lorem Ipsum is simply dummy text of the printing</div>
                        <div className="divider-x primary" style={{ width: '10%', marginTop: '11px' }}></div>
                    </div>
                    <div className="_quote">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</div>
                    <div className="_user-card">
                        <div className="_avtar"><span/></div>
                        <div className="_name">JohnDoe Deo</div>
                        <div className="_type">Graduate</div>
                    </div>
                </div>
            </Col>
        </Row>
)

export default HomeBodyBottomContent;