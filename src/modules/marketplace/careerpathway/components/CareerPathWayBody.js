import React from 'react';
import { Row, Col } from 'antd';
import Banner from './../../../../shell/containers/Banner'
import CareerPathWayTopContent from './CareerPathWayBodyTopContent';
// import HomeBodyBottomContent from './HomeBodyBottomContent';
import CareerPathWayMainContent from './CareerPathWayBodyMainContent';
// import HomeFooter from './HomeFooter'

const CareerPathWayBody = () => (
	<Row type="flex" className="app-main" justify="center">
		<Banner type='marketplacehomecareerpath'/>
		<CareerPathWayTopContent />
		<Col sm={22} md={20} className='app-main-box' style={{marginBottom: '90px'}}>
	    	<CareerPathWayMainContent />        
	    </Col>
    </Row>
)

export default CareerPathWayBody;