import React, { Component } from 'react';

let boxStyle = {
  width: '1000px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px',
  overflow: 'hidden',
  color: '#d9d9d9'
};

let aStyle = {
  fontWeight: '400',
  color: '#d9d9d9',
  margin: '18px 0 0 25px',
  float: 'left',
  fontSize: '25px'
}

let imgStyle = {
  maxWidth: '500px',
  float: 'left'
};

const about = [
  'Hikayemiz 2013 yılında devresini, yazılımını ve gövdesini sıfırdan yaptığımız çizgi izleyen robotlarla başladı.',
  '2014 yılında yavaş yavaş toparlanmakta olan ekibimiz FRC robotik yarışmasını keşfetti. Azimli çalışmaları sonucunda 90.000 ₺’nin üstünde bir meblağ bulan takım üyeleri, FRC South Florida Regional’a katıldı. Katıldığımız ilk yarışmada yeni kurulmuş bir takımın alabileceği en prestijli ödül olan “Rookie All-Star” ödülünü kazandık. Yarı finallere kadar ulaşıp ülkemizi ve okulumuzu en iyi şekilde temsil ettik. Bir sonraki sezonda FRC Off-Season etkinliğine katıldık ve takıma yeni üye alımlarına başladık..',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
]

const images = [
  null,
  null,
  'first.png',
  'first.png',
  'first.png',
  'first.png',
  'first.png',
  'first.png'
]

class About extends Component {

  constructor(){
    super();
    this.divs = [];

    this.divs.push(
        <div style={{...boxStyle, ...{height: '70px'}}}>
            <h1><a href='/about' style={aStyle}>Takım</a></h1>
            <h1><a href='/members' style={aStyle}>Üyeler</a></h1>
        </div>
    );

    for(let i = 0; i < 8; ++i){
      if(images[i] === null){
        this.divs.push(
          <div style={boxStyle} key={i}>
            <div style={aStyle}>
              <p style={{color: '#d9d9d9', fontSize: '18px', margin: '0px 8px 18px 5px'}}>{about[i]}</p>
            </div>
          </div>
        )
      } else{
        this.divs.push(
          <div style={boxStyle} key={i}>
            <div style={{...aStyle, ...{width: '440px'}}}>
              <p style={{color: '#d9d9d9', fontSize: '18px', margin: '0px 8px 18px 5px'}}>{about[i]}</p>
            </div>
            <img src={require('../images/' + images[i])} style={imgStyle} alt=''></img>
          </div>
        )
      }
    }

  }

  render() {
    return (
      <div className='About' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default About;
