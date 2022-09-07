import React, { Component } from 'react';
import s from '../text/about';
import * as sty from '../Styles';


class About extends Component {

  constructor(){
    super();
    
    this.divs = [];

    this.divs.push(
      <div style={{...sty.boxStyle, ...{height: '70px'}}} key={1}>
        <h1><a href='/about' style={sty.aStyle}>Takım</a></h1>
        <h1><a href='/members' style={sty.aStyle}>Üyeler</a></h1>
      </div>
    );

    this.s = "\n";
    this.ps = [<p style={sty.pStyle} key={3}>{this.s}</p>];

    for(let i = 0; i < s.content.length; ++i){
      this.ps.push(
        <p style={sty.pStyle} key={i + 100}>{s.content[i]}</p> 
      );
    }

    this.divs.push(
      <div style={sty.boxStyle} key={2}>
        <h1 style={sty.aStyle}>Tarihçe</h1>
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