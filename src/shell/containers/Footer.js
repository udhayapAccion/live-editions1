import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} >
                        <div style={{ height: '300px', backgroundColor: '#202020' }} />
                        <div style={{height:'96px', display:'flex', color:'#ffffff', flexDirection:'column',alignItems:'center', justifyContent:'center',backgroundColor:'#181818'}}>
                         <label>Live Editions, Inc. © 2018 All right reserved | 2890 Kilgore Rd, Suite 165 Rancho Cordova CA 95670 |</label>
                         <label>www.liveditions.com</label>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}
export default Footer