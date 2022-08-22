import React, { Component } from 'react'

const sliderStyle = {
  width: '1080px',
  height: '500px',
  overflow: 'hidden'
};

const figureStyle = {
  display: 'flex',
  margin: '0',
  left: '0',
  width: '500%',
  height: '500px',
  animation: '20s slider infinite'
};

const divStyle = {
  position: 'relative',
  width: '20%'
};

const imgStyle = {
  objectFit: 'cover',
  height: '500px',
  width: '1080px',
  float: 'left'
};

const h1Style = {
  position: 'absolute',
  color: '#d9d9d9',
  fontSize: '40px',
  fontWeight: '600',
  backgroundColor: 'rgba(33, 33, 33, 0.6)',
  width: '1060px',
  height: '62px',
  marginTop: '420px',
  paddingLeft: '20px',
  paddingTop: '18px'
};

const images = ['slider1.JPG',
 'slider2.JPG', 
 'slider3.JPG', 
 'slider4.jpg', 
 'slider5.jpg'
];

const titles = ['Slider 1', 'Slider 2', 'Slider 3', 'Slider 4', 'Slider 5']

class Slider extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i = 0; i < 5; ++i) {
      this.divs.push(
        <div style={divStyle} key={i}>
          <img src={require('../images/' + images[i])} style={imgStyle} alt=''/>
          <h1 style={h1Style}>{titles[i]}</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className='slider' style={sliderStyle}>
        <figure style={figureStyle}>
          {this.divs}
        </figure>
      </div>
    )
  }
}

export default Slider;
