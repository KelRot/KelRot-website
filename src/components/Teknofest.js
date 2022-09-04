import React, { Component } from 'react'
import s from '../text/teknofest';

const boxStyle = {
  width: '1000px',
  height: '300px',
  backgroundColor: '#323232',
  margin: '40px',
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