import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from '../route';
//import './style.scss'

import reactLogo from '../assets/React-icon.png';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../store/reducers';
import { Row, Col } from 'antd';
import MainMenu from './containers/MainMenu'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Body from './containers/Body'
import Content from './containers/Content'

let store = createStore(reducers, applyMiddleware(thunk));

const MainPage = () => (
    // <Provider store={store}>
    //     <BrowserRouter>
            <div style={{position:'relative'}}>
                <div  style={{position:'absolute',width:'100%'}}>
                    <Row >
                        <Col span={24} >
                            <MainMenu />
                            <Header />
                        </Col>
                    </Row>
                </div>
                <div style={{position:'absolute',width:'100%', top:'70px'}}>
                    <Row >
                        <Col span={24} >
                            <Body />
                            <Footer />
                        </Col>
                    </Row>
                </div>
            </div>
    //     </BrowserRouter>
    // </Provider>
);

export default MainPage;
