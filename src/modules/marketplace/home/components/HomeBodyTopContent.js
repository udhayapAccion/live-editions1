import React from 'react';
import '../../style.scss'
import { Row, Col, Input } from 'antd';

const HomeBodyTopContent = () => (
    <div>
        <Row type='flex' justify='center'>
            <Col span={24} >
                <div style={{textAlign:'center', paddingTop:'50px', paddingBottom:'50px', backgroundColor:'none'}}>
                    <span style={{fontSize:36, fontWeight:600, lineHeight:2, color: 'white'}}>Follow your path to Success!</span><br/>
                    <span style={{fontSize:26, fontWeight:600, lineHeight:2, color: 'white'}}>Career Education Pathways to Economic and Career Mobility</span><br/>
                    <span style={{fontSize:26, fontWeight:400, lineHeight:2, color: 'white'}}>Providing Career Pathways from K-12 and Adult Education to the Workforce</span><br/><br/>
                    <Input style={{height:'50px', width:'650px'}} placeholder='What do you want to learn today? What is your dream job?'></Input>
                </div>
            </Col>
        </Row>
    </div>
)

export default HomeBodyTopContent;