import React, { Component } from 'react';
import s from '../text/about';
import * as sty from '../Styles';

class About extends Component {

  constructor(){
    super();
    this.divs = [];

    this.divs.push(
      <div style={{...sty.boxStyle, ...{height: '70px'}}}>
          <h1><a href='/about' style={{...sty.aStyle, ...{marginLeft: '30px', width: '80px'}}}>Takım</a></h1>
          <h1><a href='/members' style={{...sty.aStyle, ...{marginLeft: '30px', width: '80px'}}}>Üyeler</a></h1>
          <h1><a href='/vision-mission' style={{...sty.aStyle, ...{marginLeft: '30px', width: '200px'}}}>Vizyon-Misyon</a></h1>
      </div>
    );

    for(let i = 0; i < s.content.length; ++i){
      if(s.images[i] === ''){
        this.divs.push(
          <div style={sty.boxStyle} key={i}>
            <div style={sty.aStyle}>
              <p style={sty.pStyle}>{s.content[i]}</p>
            </div>
          </div>
        )
      } else{
        this.divs.push(
          <div style={sty.boxStyle} key={i}>
            <div style={{...sty.aStyle, ...{width: '440px'}}}>
              <p style={sty.pStyle}>{s.content[i]}</p>
            </div>
            <img src={require('../images/' + s.images[i])} style={sty.imgStyle} alt=''></img>
          </div>
        )
      }
    }

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