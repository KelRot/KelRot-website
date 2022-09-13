import React, { Component } from 'react'
import s from '../text/vision-mission';
import * as sty from '../Styles';

class VisionMission extends Component {
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

    for(let i = 0; i < s.length; ++i){
      this.divs.push(
        <div style={sty.boxStyle}>
            <div style={sty.aStyle}>
                <h1 style={sty.h1Style}>{s[i].h}</h1>
                <p style={sty.pStyle}>{s[i].t}</p>
            </div>
          </div>
      );
    }

  }

  render() {
    return (
      <div className='Vision-Mission' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default VisionMission;