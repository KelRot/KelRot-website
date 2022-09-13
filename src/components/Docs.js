import React, { Component } from 'react';
import * as sty from '../Styles';
import s from '../text/docs';

const linkStyle = {
  color: '#d9d9d9'
};

const titles = [], contents = [], links = [];

class Docs extends Component {
  constructor(){
    super();

    for(let i = 0; i < s.length; ++i){
      titles.push(s[i].t);
      contents.push(s[i].c);
      links.push(s[i].l);
    }

    this.divs = [];
    for(let i = 0; i < s.length; ++i){
      let a = [];
      for(let j = 0; j < contents[i].length; ++j){
        a.push(
          <div style={sty.miniBoxStyle}>
            <a href={links[i][j]} style={linkStyle}>
              {contents[i][j]}
            </a>
          </div>
        );
      }
      this.divs.push(
        <div style={sty.boxStyle} key={i}>
          <div style={sty.aStyle}>
            <h1 style={{...sty.h1Style, ...{width: '1000px'}}}>{titles[i]}</h1>
            <div style={{width: (contents[i].length * 150 - 30 + 'px'), float: 'left', position: 'relative', top: '10px', marginBottom: '40px'}}>
              {a}
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div class='Docs' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default Docs;