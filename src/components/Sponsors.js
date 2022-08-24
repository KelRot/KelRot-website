import React, { Component } from 'react';


const boxStyle = {
  width: '1000px',
  height: '300px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px'
};

let imgStyle;

let Platinum = {
  maxWidth: '500px',
  filter: 'drop-shadow(0px 0px 15px #dfe6eb)'
}

let Gold = {
  maxWidth: '500px',
  filter: 'drop-shadow(0px 0px 15px #FFD700)'
}

let Silver = {
  maxWidth: '500px',
  filter: 'drop-shadow(0px 0px 15px #C0C0C0)'
}

let Bronze = {
  maxWidth: '500px',
  filter: 'drop-shadow(0px 0px 15px #cd7f32)'
}

let Service = {
  maxWidth: '500px',
  filter: 'drop-shadow(0px 0px 15px #5127a1)'
}

const pStyle = {
  width: '440px',
  color: '#ffffff',
  overflow: 'hidden',
  margin: '30px 0 0 30px',
  float: 'left',
  fontSize: '18px'
}

const titles = [
  'İSKADER',
  'KELEV',
  'Beşiktaş Belediyesi',
  'İninal',
  'Atıf Kocaarslan',
  'Volt Elektrik Motorları',
  'Çağlar Ailesi',
  'Rest Yazılım',
  'Arçelik Garage',
  'Panfez'
];

/* Beşiktaş Belediyesi - Platin 
İskader - Platin 
Kelev - Platin 
İninal - Altın
Atıf - gümüş
Volt- Bronz
Çağlar Ailesi - Bronz
Rest - Bronz
Panfez - Hizmet
Arçelik - Hizmet*/

const contents = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

const images = [
  'iskader.png', 
  'kelev.png', 
  'besiktas.png', 
  'ininal.png',
  'atif kocaarslan.png',
  'volt.png', 
  'caglar ailesi.png',
  'rest.png', 
  'garage.png',
  'panfez.png'
];

const links = [
  'https://iskader.org.tr/',
  'https://www.kelev.org.tr/',
  'https://www.besiktas.bel.tr/',
  'https://www.ininal.com/',
  null,
  'https://voltmotor.com.tr/',
  null,
  'https://www.restyazilim.com/',
  'https://www.arcelikglobal.com/tr/teknoloji/ar-ge/arcelik-garage/'
];


class Sponsors extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i = 0; i < 10; ++i){

      if(i < 3){
        imgStyle = Platinum;
      } else if(i < 4) {
        imgStyle = Gold;
      } else if(i < 5) {
        imgStyle = Silver;
      } else if(i < 8){
        imgStyle = Bronze;
      } else{
        imgStyle = Service;
      }

      if(i % 2 === 0){
        this.divs.push(
          <div style={boxStyle} key={i}>
            <div style={pStyle}>
              <h1 style={{textAlign: 'left', fontWeight: '600'}}>{titles[i]}</h1>
              <p style={{marginTop: '10px', color: '#d9d9d9'}}>{contents[i]}</p>
              <a href={links[i]} class='gotowebsite' style={{float: 'left'}}>Siteye git</a>
            </div>
            <div style={{width: '500px', float: 'right'}}><img src={require('../images/' + images[i])} style={imgStyle} alt='' /></div>
          </div>
        );
      } else{
        this.divs.push(
          <div style={boxStyle} key={i}>
            <div style={{width: '500px', float: 'left'}}><img src={require('../images/' + images[i])} style={imgStyle} alt='' /></div>
            <div style={pStyle}>
              <h1 style={{textAlign: 'right', fontWeight: '600'}}>{titles[i]}</h1>
              <p style={{marginTop: '10px', textAlign: 'right', color:'#d9d9d9'}}>{contents[i]}</p>
              <a href={links[i]} class='gotowebsite' style={{float: 'right'}}>Siteye git</a>
            </div>
          </div>
        ); 
      }
    }
  }
  render() {
    return (
      <div class='Sponsors' style={{overflow: 'auto'}}>
        {this.divs}
      </div>
    )
  }
}

export default Sponsors;
