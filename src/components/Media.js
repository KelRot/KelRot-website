import React, { Component } from 'react'
import * as sty from '../Styles';
import s from '../text/media';

const titles = [], photos = [], videos = [];

class Media extends Component {
  constructor(){
    super();

    for(let i = 0; i < s.length; ++i){
      titles.push(s[i].t);
      photos.push(s[i].p);
      videos.push(s[i].v);
    }


    this.p = [];
    this.v = [];

    this.divs = [];

    for(let i = 0; i < s.length; ++i){

      for (let j = 0; j < photos[i].length; ++j){
        this.p.push(
          <div style={sty.littleBoxStyle}>
            <p style={{...sty.pStyle, ...{textAlign: 'center', float: 'bottom', backgroundColor: sty.palette.lighter, margin: '0', padding: '5px'}}}>{videos[i][j].t}</p>
          </div>
        );
      }

      for (let j = 0; j < videos[i].length; ++j){
        this.v.push(
          <div style={sty.littleBoxStyle}>
            <p style={{...sty.pStyle, ...{textAlign: 'center', float: 'bottom', backgroundColor: sty.palette.lighter, margin: '0', padding: '5px'}}}>{videos[i][j].t}</p>
          </div>
        );
      }


      this.divs.push(
        <div style={sty.boxStyle} key={i}>
          <div style={sty.aStyle}>
            <h1 style={sty.h1Style}>{titles[i]}</h1> 
            <h2 style={sty.h2Style}>Fotoğraflar</h2>
            {this.p} 
            <h2 style={sty.h2Style}>Videolar</h2>
            {this.v}         
          </div>
        </div>
      );

      this.p = [];
      this.v = [];

    }

  }

  render() {
    return (
      <div className='Media' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default Media;