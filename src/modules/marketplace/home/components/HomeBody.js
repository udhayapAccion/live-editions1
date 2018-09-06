import React from 'react';
import '../../style.scss'
import { Row, Col } from 'antd';
import Banner from './../../../../shell/containers/Banner'
import HomeBodyTopContent from './HomeBodyTopContent';
import HomeBodyBottomContent from './HomeBodyBottomContent';
import HomeBodyMainContent from './HomeBodyMainContent';
import HomeFooter from './HomeFooter'

const HomeBody = () => (
	<Row type="flex" className="app-main" justify="center">
		<Banner type="marketplacehome"/>
		<HomeBodyTopContent />
	    <Col sm={22} md={20} className='app-main-box'>
	    	<HomeBodyMainContent />        
	    </Col>
	    <HomeBodyBottomContent />
	    <HomeFooter/>
    </Row>
)

export default HomeBody;