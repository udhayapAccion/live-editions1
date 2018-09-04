import React from 'react';
import '../style.scss'
import { Row, Col, Input } from 'antd';

const MarketPlaceBodyBottomContent = () => (
    <div>
        <Row type='flex' justify='center'>
            <Col span={24} >
                <div style={{textAlign:'center', height:'500px', paddingTop:'20px', paddingBottom:'20px', backgroundColor:'none'}}>
                    <span style={{fontSize:24, fontWeight:600, lineHeight:2}}>What our students have to say</span><br/>
                    <span style={{fontSize:16, fontWeight:300, lineHeight:2}}>Lorem Ipsum is simply dummy text for printing</span><br/>
                    <div style={{height:'100px'}} />
                    <span style={{fontSize:16, fontWeight:300, lineHeight:2}}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</span>
                    <div style={{height:'50px'}} />
                    <span style={{fontSize:16, fontWeight:400, lineHeight:2}}>JohnDoe Doe</span><br/>
                    <span style={{fontSize:16, fontWeight:300, lineHeight:2}}>Graduate</span>
                </div>
            </Col>
        </Row>
    </div>
)

export default MarketPlaceBodyBottomContent;