import React, { Component } from 'react';


const boxStyle = {
  width: '950px',
  height: '300px',
  backgroundColor: '#323232',
  marginBottom: '80px',
  marginTop: '40px',
  borderRadius: '20px'
};

const imgStyle = {
  height: '200px',
  float: 'right',
  marginTop: '50px'
}

const pStyle = {
  width: '460px',
  color: 'white',
  overflow: 'hidden',
  margin: '30px 0 0 50px',
  float: 'left',
  fontSize: '18px'
}

const titles = ['FIRST Hakkında', 'Rapid React (2022)', 'Infinite Recharge (2020)', 'Destination: Deep Space (2019)', 'FIRST Power Up (2018)', 'FIRST Stronghold (2016)']

const contents = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']

const images = ['first.png', 'rapidreact.png', 'infinite.png', 'deepspace.png', 'powerup.png', 'stronghold.png'];


class FRC extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i=0; i<6; ++i){
      this.divs.push(<div style={boxStyle} key={i}>
        <div style={pStyle}>
          <h1>{titles[i]}</h1>
          <p style={{marginTop: '10px'}}>{contents[i]}</p>
        </div>
        <img src={require('../images/' + images[i])} style={imgStyle}></img>
      </div>);
    }
  }
  render() {
    return (
      <div class='FRC' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default FRC;