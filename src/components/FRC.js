import React, { Component } from 'react';
import s from '../text/seasons';
import * as sty from '../Styles';

let titles = [], contents = [], images = [];

class FRC extends Component {
  constructor(){
    super();

    for(let i = 0; i < s.length; ++i){
      contents.push(s[i].t);
      titles.push(s[i].p);
      images.push(s[i].im);
    }

    this.divs = [];
    for(let i = 0; i < s.length; ++i){
      this.divs.push(<div style={sty.boxStyle} key={i}>
        <div style={{...sty.aStyle, ...{width: '440px'}}}>
          <h1 style={sty.h1Style}>{titles[i]}</h1>
          <p style={sty.pStyle}>{contents[i]}</p>
        </div>
        <div style={{width: '500px', float: 'right'}}><img src={require('../images/' + images[i])} style={sty.imgStyle} alt=''></img></div>
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
