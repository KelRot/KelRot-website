import React, { Component } from 'react'


const boxStyle = {
  width: '1000px',
  height: '300px',
  backgroundColor: '#323232',
  marginBottom: '80px',
  marginTop: '40px',
  borderRadius: '20px'
};

let imgStyle = {
  maxWidth: '500px',
  float: 'left'
};

const pStyle = {
  width: '440px',
  color: '#ffffff',
  overflow: 'hidden',
  margin: '30px 0 0 30px',
  float: 'left',
  fontSize: '18px'
};

const titles = [
  'TEKNOFEST',
  'Efficiency Challenge',
  '2021 Sezonu'
];

const contents = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

const images = ['teknofest-logo.png', 'efficiency.png', 'teknofest-logo.png'];

class Teknofest extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i = 0; i < 3; ++i){
      this.divs.push(
        <div style={boxStyle} key={i}>
          <div style={pStyle}>
            <h1 style={{fontWeight: '600'}}>{titles[i]}</h1>
            <p style={{marginTop: '10px', color: '#d9d9d9'}}>{contents[i]}</p>
          </div>
          <img src={require('../images/' + images[i])} style={imgStyle} alt=''></img>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='Teknofest' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default Teknofest;