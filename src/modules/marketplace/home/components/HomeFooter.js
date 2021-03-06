import React from 'react';
import '../sass/HomeFooter.css'
import { Row, Col } from 'antd';

const HomeFooter = () => (
    <div className="market-place-bottom-component">
	    <Row className="_banner-quote" type="flex">
	      <Col xs={22} md={20}>
	        " We here to prove the process of education , so that each and every person has chance to realise their full potential and enjoy a better life. "       
	        <span className="_author">- LIVE EDITIONS</span>
	      </Col>
	    </Row>
	    <Row type="flex" className="_stats">
	      <Col xs={24} md={6} className="_question">
	        Why Stargate?
	      </Col>
	      <Col xs={24} md={6} className="_stat_item">
	        <div className="_avtar">
	        	<img src={require(`../../../../assets/icons/shield/shield.png`)} />
	        </div>
	        <div className="_body">
	          <div className="_title">20,000+ STUDENTS</div>
	          <div className="_sub-text">Lorem Ipsum is simply dummy text of the printing</div>
	        </div>
	      </Col>
	      <Col xs={24} md={6} className="_stat_item">
	        <div className="_avtar">
				<img src={require(`../../../../assets/icons/award/award.png`)} />
	        </div>
	        <div className="_body">
	          <div className="_title">AWARD WINNING</div>
	          <div className="_sub-text">Lorem Ipsum is simply dummy text of the printing</div>
	        </div>
	      </Col>
	      <Col xs={24} md={6} className="_stat_item">
	        <div className="_avtar">
				<img src={require(`../../../../assets/icons/credit-card/credit-card.png`)} />
	        </div>
	        <div className="_body">
	          <div className="_title">SECURITY PAYMENT</div>
	          <div className="_sub-text">Lorem Ipsum is simply dummy text of the printing</div>
	        </div>
	      </Col>
	    </Row>
	  </div>
)

export default HomeFooter;