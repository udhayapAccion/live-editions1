import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from '../route';

import reactLogo from '../assets/React-icon.png';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../store/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

const MainPage = () => (
     <Provider store={store}>
        <BrowserRouter>
            <main className="container">
                <div>
                    <h1>Hello world!</h1>
                    <img style={{width:"200px",height:"200px"}} alt="react logo" src={reactLogo} />

                </div>
                <ul className="left">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/others">Others</Link>
                    </li>
                </ul>
                <Routes />
            </main>
        </BrowserRouter>
     </Provider>
);

export default MainPage;
