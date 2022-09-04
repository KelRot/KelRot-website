import React, { Component } from 'react';
import s from '../text/sponsors';

const boxStyle = {
  width: '1000px',
  backgroundColor: '#323232',
  margin: '40px',
  borderRadius: '20px',
  overflow: 'auto'
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
  fontSize: '18px',
  textAlign: 'justify'
};

/* 
Beşiktaş Belediyesi - Platin 
İskader - Platin 
Kelev - Platin 
İninal - Altın
Atıf - gümüş
Volt- Bronz
Çağlar Ailesi - Bronz
Rest - Bronz
Panfez - Hizmet
Arçelik - Hizmet
*/

let contents = [], titles = [], images = [], links = [];


class Sponsors extends Component {
  constructor(){
    super();

    for(let i = 0; i < s.length; ++i){
      contents.push(s[i].t);
      titles.push(s[i].p);
      links.push(s[i].l);
      images.push(s[i].im);
    }

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
              {links[i] != '' ?
                <a href={links[i]} class='gotowebsite' style={{float: 'left', marginBottom: '30px'}}>Siteye git</a>
                : <div></div>
              }
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
              <p style={{marginTop: '10px', color:'#d9d9d9'}}>{contents[i]}</p>
              {links[i] != '' ?
                <a href={links[i]} class='gotowebsite' style={{float: 'right', marginBottom: '30px'}}>Siteye git</a>
                : <div></div>
              }
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