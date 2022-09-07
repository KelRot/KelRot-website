import React, { Component } from 'react'
import * as sty from '../Styles';



const titles = ['2021-2022', '2020-2021', '2018-2019', '2017-2018','2015-2016'];

const photos = [
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ]
]

const videos = [
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ],
  [
    {
      img: '',
      t: 'Off-Season'
    },
    {
      img: '',
      t: 'Regional'
    },
    {
      img: '',
      t: 'Sabancı Robotik Yarışması'
    }
  ]
]


class Media extends Component {
  constructor(){
    super();

    this.p = [];
    this.v = [];

    this.divs = [];

    for(let i = 0; i < 5; ++i){

      for (let j = 0; j < photos[i].length; ++j){
        this.p.push(
          <div style={sty.littleBoxStyle}>
            <p style={sty.littlePStyle}>{photos[i][j].t}</p>
          </div>
        );
      }

      for (let j = 0; j < videos[i].length; ++j){
        this.v.push(
          <div style={sty.littleBoxStyle}>
            <p style={sty.littlePStyle}>{videos[i][j].t}</p>
          </div>
        );
      }


      this.divs.push(
        <div style={sty.boxStyle} key={i}>
          <div style={sty.pStyle}>
            <h1 style={{textAlign: 'left', fontWeight: '600'}}>{titles[i]}</h1> 
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