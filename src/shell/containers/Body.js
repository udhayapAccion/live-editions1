import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MarketPlaceHomeBody from '../../modules/marketplace/home/components/HomeBody'
import MarketPlaceCareerPathWayBody from '../../modules/marketplace/careerpathway/components/CareerPathWayBody'
import Banner from './Banner'
import '../style.scss';
import { Switch, Route,Redirect } from 'react-router-dom';
import StudyGroupHome from '../../modules/studygroup/home/containers/homeBody';
import WorkForceHome from '../../modules/workforce/home/containers/homeBody';
class Body extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'default'
        }
    }
    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Redirect exact from='/' to='/marketplace' />
                    <Route exact path='/marketplace' component={MarketPlaceHomeBody} />
                    <Route path='/studygroups' component={StudyGroupHome} />
                    <Route path='/workforce' component={WorkForceHome} />
                    <Route path='/careerpathway' component={MarketPlaceCareerPathWayBody} />
                </Switch>
            </div>
        )
    }
}
export default Body;