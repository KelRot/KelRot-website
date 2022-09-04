import React, { Component } from 'react'


let boxStyle = {
  width: '1000px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px',
  overflow: 'hidden',
  color: '#d9d9d9'
};

const h1Style = {
    color: '#d9d9d9',
    margin: '25px 0 0 20px',
    float: 'left',
    fontWeight: '600'
};

const aStyle = {
  fontWeight: '400',
  color: '#d9d9d9',
  margin: '18px 0 0 25px',
  float: 'left',
  fontSize: '25px'
}

const personBoxStyle = {
    width: '150px',
    height: '144px',
    margin: '30px 25px 0 25px',
    float: 'left',
    backgroundColor: 'rgba(64, 64, 64)'
};


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
        <div style={{...boxStyle, ...{height: '70px'}}}>
            <h1><a href='/about' style={aStyle}>Takım</a></h1>
            <h1><a href='/members' style={aStyle}>Üyeler</a></h1>
        </div>
    );

    this.personBoxes = [];
    for(let i = 0; i < 20; ++i){
        this.personBoxes.push(
            <div style={personBoxStyle}>
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
        <div style={{...boxStyle, ...{height: '830px'}}}>
            <div style={{width: '1000px', height: '80px'}}><h1 style={h1Style}>Takım</h1></div>
            {this.personBoxes}
        </div>
    );
    
    this.personBoxes = [];
    for(let i = 20; i < 25; ++i){
        this.personBoxes.push(
            <div style={personBoxStyle}>
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
        <div style={{...boxStyle, ...{height: '300px'}}}>
            <div style={{width: '1000px', height: '80px'}}><h1 style={h1Style}>Mentörler</h1></div>
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