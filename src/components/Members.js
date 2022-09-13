import React, { Component } from 'react'
import * as sty from '../Styles';

const people = [
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    },
    {
        img: '',
        content: ''
    }
];

class Members extends Component {
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

    this.personBoxes = [];
    for(let i = 0; i < 20; ++i){
        this.personBoxes.push(
            <div style={sty.personBoxStyle}>
                <div style={{height: '90px', backgroundColor: '#171b26'}}>
                    {/* <img src={require('../images/' + people[i].img)}></img> */}
                </div>
                <div style={{height: '54px'}}>
                    {people[i].content}
                </div>
            </div>
        );
    }

    this.divs.push(
        <div style={{...sty.boxStyle, ...{height: '830px'}}}>
            <div style={sty.aStyle}>
                <h1 style={sty.h1Style}>Takım</h1>
            </div>
            {this.personBoxes}
        </div>
    );
    
    this.personBoxes = [];
    for(let i = 20; i < 25; ++i){
        this.personBoxes.push(
            <div style={sty.personBoxStyle}>
                <div style={{height: '90px', backgroundColor: '#171b26'}}>
                    {/* <img src={require('../images/' + people[i].img)}></img> */}
                </div>
                <div style={{height: '54px'}}>
                    {people[i].content}
                </div>
            </div>
        );
    }

    this.divs.push(
        <div style={{...sty.boxStyle, ...{height: '300px'}}}>
            <div style={sty.aStyle}>
                <h1 style={sty.h1Style}>Mentörler</h1>
            </div>
            {this.personBoxes}
        </div>
    );
  }
  render() {
    return (
        <div style={{overflow: 'auto'}}>
          {this.divs}
        </div>
    )
  }
}

export default Members;