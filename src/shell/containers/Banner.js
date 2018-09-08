import React, { Component } from 'react';
import '../style.scss'
import { Row, Col } from 'antd';
import { Switch, Route,Redirect } from 'react-router-dom';
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
        return(
            <Row className={"app-banner " +  (this.props.type == "marketplacehome" ? "full-vh" : "")}>
                <Col span={24}>
                <Switch>
                    <Redirect exact from='/' to='/marketplace' />
                    <Route exact path='/marketplace' component={MarketPlaceHomeBanner} />
                    <Route path='/studygroups' component={MarketPlaceHomeBanner} />
                    <Route path='/workforce' component={MarketPlaceHomeBanner} />
                    <Route path='/marketplace/careerpathway' component={MarketPlaceCareerPathWayBanner} />
                </Switch>
                </Col>
            </Row>
        )
    }
}

export default Banner