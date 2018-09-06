import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import MarketPlaceHomeBanner from '../../modules/marketplace/home/components/HomeBanner'
import MarketPlaceCareerPathWayBanner from '../../modules/marketplace/careerpathway/components/CareerPathWayBanner'

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'default'
        }

        console.log(props)
    }
    render(){
        var banner;
        switch(this.props.type) {
            case "marketplacehome" :
                banner = <MarketPlaceHomeBanner/>;
                break;
            case "marketplacehomecareerpath" :
                banner = <MarketPlaceCareerPathWayBanner/>;
                break;
            default: 
                banner = <MarketPlaceHomeBanner/>;
        }
        return(
            <Row className={"app-banner " +  (this.props.type == "marketplacehome" ? "full-vh" : "")}>
                <Col span={24}>
                    {banner}
                </Col>
            </Row>
        )
    }
}

export default Banner