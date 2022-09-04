import React, { Component } from 'react';
import s from '../text/about';

let boxStyle = {
  width: '1000px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px',
  overflow: 'hidden',
  color: '#d9d9d9'
};

let aStyle = {
  fontWeight: '400',
  color: '#d9d9d9',
  margin: '18px 20px 0 25px',
  float: 'left',
  fontSize: '25px',
  float: 'left'
};

const pStyle = {
  color: '#ffffff',
  float: 'left',
  fontSize: '18px',
  float: 'left',
  margin: '30px 20px 0 20px',
  paddingBottom: '30px'
};

let imgStyle = {
  maxWidth: '500px',
  float: 'left'
};


class About extends Component {

  constructor(){
    super();
    
    this.divs = [];

    this.divs.push(
      <div style={{...boxStyle, ...{height: '70px'}}} key={1}>
        <h1><a href='/about' style={aStyle}>Takım</a></h1>
        <h1><a href='/members' style={aStyle}>Üyeler</a></h1>
      </div>
    );

    this.s = "\n";
    this.ps = [<p style={pStyle} key={3}>{this.s}</p>];

    for(let i = 0; i < s.content.length; ++i){
      this.ps.push(
        <p style={pStyle} key={i + 100}>{s.content[i]}</p> 
      );
    }

    this.divs.push(
      <div style={boxStyle} key={2}>
        <h1 style={aStyle}>Tarihçe</h1>
        {this.ps}
      </div>
    );
      
  }

  render() {
    return (
      <div className='About' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default About;