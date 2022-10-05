import React, { Component } from 'react'
import * as sty from '../Styles';
import s from '../text/media';
import Axios from 'axios';


class Media extends Component {
  constructor(){
    super();
    this.state = {
      divs: []
    };
  }
  componentDidMount(){
    let d = [];
    for(let i = 0; i < s.length; ++i){
      d.push(
        <div style={sty.boxStyle} key={i}>
          <div key={i+86}> 
            <a href={s[i].l} style={sty.h1BlogStyle}>
              {s[i].t}
            </a> 
          </div>
        </div>
      );
    }
    this.setState({divs: d});
  }


  render() {
    return (
      <div className='Media' style={{overflow: 'auto'}}>
        {this.state.divs}
      </div>
    )
  }
}

export default Media;