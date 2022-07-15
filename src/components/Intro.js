import React, { Component } from 'react'
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

class Intro extends Component {
  render() {
    return (
      <ul className='intro'>
        <li>
          <img src={logo1} id='logo1' alt='logo1' />
          <img src={logo2} id='logo2' alt='logo2' />
        </li>
        <li>
          Kabataş Erkek Lisesi Robotik Takımı
        </li>
      </ul>
    )
  }
}

export default Intro;