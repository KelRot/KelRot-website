import React, { Component } from 'react'
import s from '../text/teknofest';
import * as sty from '../Styles';


let imgStyle = {
  maxWidth: '500px',
  float: 'left'
};


let contents = [], images = [], titles = [];


class Teknofest extends Component {
  constructor(){
    super();
    for(let i = 0; i < s.length; ++i){
      contents.push(s[i].t);
      titles.push(s[i].p);
      images.push(s[i].im);
    }
    this.divs = [];
    for(let i = 0; i < 3; ++i){
      this.divs.push(
        <div style={sty.boxStyle} key={i}>
          <div style={{...sty.pStyle, ...{width: '440px', textAlign: 'left'}}}>
            <h1 style={{fontWeight: '600'}}>{titles[i]}</h1>
            <p style={{marginTop: '10px', color: sty.palette.pcolor}}>{contents[i]}</p>
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