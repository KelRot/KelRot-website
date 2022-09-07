import React, { Component } from 'react';
import * as sty from '../Styles';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar' style={{backgroundColor: sty.palette.navbar}}>
        <ul>
            <a href='/'>Ana Sayfa</a>
            <a href='/about'>Hakkımızda</a>
            <a href='/media'>Medya</a>
            <a href='/sponsors'>Sponsorlar</a>
            <a href='/frc'>FRC</a>
            <a href='/teknofest'>TEKNOFEST</a>
            <a href='/docs'>Dokümantasyon</a>
            <a href='/blog'>Blog</a>
        </ul>
      </div>
    )
  }
}

export default Navbar;
