import React, { Component } from 'react';
import './../sass/CareerPathWayBodyMainContent.css';
import CareerListItem from './CareerListItem';
import { Row, Col } from 'antd';

class CareerPathWayBodyMainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerList: [
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://i.pinimg.com/originals/da/d6/13/dad6133d8cf7f27cedec44669afd60e4.jpg', title: "Law Public safety, corrections, and security", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
      ]
    }
  }

  onItemClick(item, index) {
    console.log('clicked', item, 'index:', index)
  }

  render() {
    return (
              <Row type="flex" justify="center">
                <Col xs={23} >
                  <Row gutter={60}>
                    {this.state.careerList.map((item, index) =>
                      <Col span={8} xs={24} sm={12} lg={8} key={index} >
                        <CareerListItem item={item} index={index} onItemClick={this.onItemClick}/>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
    );
  }
}

export default CareerPathWayBodyMainContent;
