import React, { Component } from 'react';
import '../sass/HomeBodyMainContent.css'
import { Row, Col, Input } from 'antd';
import { Button } from 'antd';

class HomeBodyMainContent extends Component {
    constructor(state) {
        super(state);
       
    }

    render() {
        return (
            <div className="future-component">
                <div className="_ttl-bar">
                    <div className="_ttl">Work Force</div>
                    <div className="_sub-ttl">Select a category to help navigate your career options.</div>
                    <div className="divider-x primary" style={{ width: '10%', marginTop: '11px' }}></div>
                </div>
                
            </div>
        );
    }
}

export default HomeBodyMainContent;