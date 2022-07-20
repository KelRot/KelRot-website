import React, { Component } from 'react';


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
  float: 'left',
}

const pStyle = {
  width: '440px',
  color: '#ffffff',
  overflow: 'hidden',
  margin: '30px 0 0 30px',
  float: 'left',
  fontSize: '18px'
}

const titles = [
  'İSKADER',
  'KELEV',
  'Beşiktaş Belediyesi',
  'Volt Elektrik Motorları',
  'Rest Yazılım',
  'İninal',
  'Arçelik Garage'
];

const contents = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

const images = [
  'iskader.png', 
  'kelev.png', 
  'besiktas.png', 
  'volt.png', 
  'rest.png', 
  'ininal.png',
  'garage.png'
];


class Sponsors extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i=0; i<7; ++i){
      if(i%2==0){
        this.divs.push(<div style={boxStyle} key={i}>
          <div style={pStyle}>
            <h1 style={{textAlign: 'left', fontWeight: '600'}}>{titles[i]}</h1>
            <p style={{marginTop: '10px', color: '#d9d9d9'}}>{contents[i]}</p>
          </div>
          <div style={{width: '500px', float: 'right'}}><img src={require('../images/' + images[i])} style={imgStyle}></img></div>
        </div>);
      }else{
        this.divs.push(<div style={boxStyle} key={i}>
          <div style={{width: '500px', float: 'left'}}><img src={require('../images/' + images[i])} style={imgStyle}></img></div>
          <div style={pStyle}>
            <h1 style={{textAlign: 'right', fontWeight: '600'}}>{titles[i]}</h1>
            <p style={{marginTop: '10px', textAlign: 'right', color:'#d9d9d9'}}>{contents[i]}</p>
          </div>
        </div>); 
      }
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

export default Sponsors;
