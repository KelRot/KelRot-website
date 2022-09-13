import React, { Component } from 'react';
import s from '../text/sponsors';
import * as sty from '../Styles';

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

let titles = [], contents = [], images = [], links = [];

class Sponsors extends Component {
  constructor(){
    super();
    this.divs = [];
    for(let i = 0; i < 10; ++i){

        for(let i = 0; i < s.length; ++i){
          contents.push(s[i].t);
          titles.push(s[i].p);
          links.push(s[i].l);
          images.push(s[i].im);
        }

      if(i % 2 === 0){
        this.divs.push(
          <div style={sty.boxStyle} key={i}>
            <div style={{...sty.aStyle, ...{width: '440px'}}}>
              <h1 style={sty.h1Style}>{titles[i]}</h1>
              <p style={sty.pStyle}>{contents[i]}</p>
              {links[i] !== '' ?
                <a href={links[i]} class='gotowebsite' style={{float: 'left', marginBottom: '30px', marginTop: '0'}}>Siteye git</a>
                : <div></div>
              }
            </div>
            <div style={{width: '500px', float: 'right'}}><img src={require('../images/' + images[i])} style={sty.imgStyle} alt='' /></div>
          </div>
        );
      } else{
        this.divs.push(
          <div style={sty.boxStyle} key={i}>
            <div style={{width: '500px', float: 'left'}}><img src={require('../images/' + images[i])} style={sty.imgStyle} alt='' /></div>
            <div style={{...sty.aStyle, ...{width: '440px', textAlign: 'right'}}}>
              <h1 style={{...sty.h1Style, ...{textAlign: 'right', float: 'right'}}}>{titles[i]}</h1>
              <p style={{...sty.pStyle, ...{marginRight: '0'}}}>{contents[i]}</p>
              {links[i] !== '' ?
                <a href={links[i]} class='gotowebsite' style={{float: 'right', marginBottom: '30px', marginTop: '0'}}>Siteye git</a>
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
