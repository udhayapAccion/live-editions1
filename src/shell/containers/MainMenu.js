import React from 'react';
//import './../style.scss'
import { Row, Col } from 'antd';
import { Button } from 'antd'
import logo from './../../assets/logo.png'

const MainMenu = () => (
    <div className="app-header">
        <div className="h-left">
            <div className="h-logo">
                <img src={logo} alt='logo' />
            </div>
        </div>
        <div className="h-right">
            <div className="h-item active">Marketplace</div>
            <div className="h-item">Study Groups</div>
            <div className="h-item">Workforce</div>
            <div className="h-item">Sign In</div>
            <div className="h-item"><Button type="primary">Get Started</Button></div>
            <div className="h-item h-divider"><div></div></div>
            <div className="h-item">For Partners</div>
        </div>
    </div>
)

export default MainMenu;