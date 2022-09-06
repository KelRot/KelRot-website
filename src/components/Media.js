import React, { Component } from 'react'

const boxStyle = {
  width: '1000px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px',
  overflow: 'auto'
};

const pStyle = {
  color: '#ffffff',
  overflow: 'hidden',
  margin: '30px 0 0 30px',
  float: 'left',
  fontSize: '18px',
  paddingBottom: '30px'
}

const h2Style = {
  color: '#d9d9d9', 
  padding: '20px 0 0 20px',
  fontWeight: '400'
}

const littleBoxStyle = {
  width: '180px',
  height: '130px',
  margin: '30px 20px 20px 20px',
  float: 'left',
  backgroundColor: '#437624'
}

const littlePStyle = {
  overflow: 'auto',
  backgroundColor: '#404040',
  float: 'bottom',
  textAlign: 'center'
}

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
          <div style={littleBoxStyle}>
            <p style={littlePStyle}>{photos[i][j].t}</p>
          </div>
        );
      }

      for (let j = 0; j < videos[i].length; ++j){
        this.v.push(
          <div style={littleBoxStyle}>
            <p style={littlePStyle}>{videos[i][j].t}</p>
          </div>
        );
      }


      this.divs.push(
        <div style={boxStyle} key={i}>
          <div style={pStyle}>
            <h1 style={{textAlign: 'left', fontWeight: '600'}}>{titles[i]}</h1> 
            <h2 style={h2Style}>Fotoğraflar</h2>
            {this.p} 
            <h2 style={h2Style}>Videolar</h2>
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