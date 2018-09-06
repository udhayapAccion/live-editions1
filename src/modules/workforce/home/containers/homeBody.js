import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { getInfo } from "../../../../store/actions";
import { connect } from 'react-redux';

import Banner from './../../../../shell/containers/Banner';
import {
    HomeBodyTopContent,
    HomeBodyMainContent,
    HomeBodyBottomContent,
    HomeFooter
} from '../components';

class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.getInfo();
    }
    render() {
        return (
            <Row type="flex" className="app-main" justify="center">
                <Banner />
                <HomeBodyTopContent {...this.props} />
                <Col sm={22} md={20} className='app-main-box'>
                    <HomeBodyMainContent />
                </Col>
                <HomeBodyBottomContent />
                <HomeFooter />
            </Row>
        );
    }
}
const mapStateToProps = (state) => {

    console.log(state.accountReducer.info);
    return {
        info: state.accountReducer.info ? state.accountReducer.info.info : {},
    };

};

const HomeBodyMain = connect(mapStateToProps, { getInfo })(HomeBody);
export default HomeBodyMain;