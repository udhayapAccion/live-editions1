import React, { Component } from 'react';
import '../style.scss';
import { Switch, Route,Redirect } from 'react-router-dom';

import MarketPlaceHomeBody from '../../modules/marketplace/home/containers/homeBody';
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
                </Switch>
            </div>
        )
    }
}
export default Body;