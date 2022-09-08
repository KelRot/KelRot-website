import React, { Component } from 'react'
import s from '../text/vision-mission';

let boxStyle = {
    width: '1000px',
    backgroundColor: '#323232',
    margin: '40px',
    borderRadius: '20px',
    overflow: 'auto',
    color: '#d9d9d9'
};

const h1Style = {
    color: '#d9d9d9',
    marginLeft: '5px',
    marginBottom: '15px',
    float: 'left',
    fontWeight: '600',
    fontSize: '32px'
};

const aStyle = {
    fontWeight: '400',
    color: '#d9d9d9',
    margin: '18px 0 0 25px',
    float: 'left',
    fontSize: '25px'
}

const pStyle = {
    color: '#d9d9d9',
    overflow: 'auto',
    margin: '0 8px 0 5px',
    float: 'left',
    fontSize: '18px',
    paddingBottom: '30px'
}


class VisionMission extends Component {
  constructor(){
    super();
    this.divs = [];

    this.divs.push(
        <div style={{...boxStyle, ...{height: '70px'}}}>
            <h1><a href='/about' style={{...aStyle, ...{marginLeft: '30px'}}}>Takım</a></h1>
            <h1><a href='/members' style={{...aStyle, ...{marginLeft: '30px'}}}>Üyeler</a></h1>
            <h1><a href='/vision-mission' style={{...aStyle, ...{marginLeft: '30px'}}}>Vizyon-Misyon</a></h1>
        </div>
    );

    for(let i = 0; i < s.length; ++i){
        this.divs.push(
            <div style={boxStyle}>
                <div style={aStyle}>
                    <h1 style={h1Style}>{s[i].h}</h1>
                    <p style={pStyle}>{s[i].t}</p>
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
