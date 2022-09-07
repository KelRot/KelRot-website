import React, { Component } from 'react';
import * as sty from '../Styles';


const titles = [
  '2021-2022',
  '2020-2021',
  '2019-2020',
  '2018-2019',
  '2016-2017'
];

const contents = [
  [
    'Off Season Kod', 
    'Regional Kod', 
    'Sabancı Yarışması Kod',
    'Off Season CAD',
    'Regional CAD',
    'Sabancı Yarışması CAD'
  ],
  [
    'Off Season Kod', 
    'Regional Kod', 
    'Off Season CAD',
    'Regional CAD'
  ],
  [
    'Off Season Kod', 
    'Regional Kod', 
    'Off Season CAD',
    'Regional CAD'
  ],
  [
    'Off Season Kod', 
    'Regional Kod',
    'Off Season CAD', 
    'Regional CAD'
  ],
  [
    'Off Season Kod', 
    'Regional Kod', 
    'Off Season CAD',
    'Regional CAD'
  ]
];



const links = [
  [
    '',
    '',
    '',
    '',
    ''
  ],
  [
    '',
    '',
    '',
    '',
    ''
  ],
  [
    '',
    '',
    '',
    '',
    ''
  ],
  [
    '',
    '',
    '',
    '',
    ''
  ],
  [
    '',
    '',
    '',
    '',
    ''
  ]
];



class Docs extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i=0; i<5; ++i){
      let a = [];
      for(let j=0; j<contents[i].length; ++j){
        a.push(
          <div style={sty.miniBoxStyle}>
            <a href={links[i][j]} style={{color: sty.palette.acolor}}>
              {contents[i][j]}
            </a>
          </div>
        );
      }
      this.divs.push(
        <div style={sty.boxStyle} key={i}>
          <div style={{width: '600px', height: '300px', margin: '0'}}>
            <h1 style={{fontWeight: '600', overflow: 'hidden', margin: '30px 0 0 30px', float: 'left'}}>
              {titles[i]}
            </h1>
            <div style={{width: (contents[i].length * 150 - 30 + 'px'), float: 'left', position: 'relative', top: '10px'}}>
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