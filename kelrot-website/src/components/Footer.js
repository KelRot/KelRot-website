import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>

        <ul className='info'>
          <li id='info'>İletişim</li>
          <li>info@kelrot.com</li>
          <li>PR Lead Name</li>
          <li>PR Lead Phone Number</li>
        </ul>
        <ul className='sponsor'>
            <li id='sponsor'>Sponsor Olun</li>
            <li>info@kelrot.com</li>
            <li>PR Lead Name</li>
            <li>PR Lead Phone Number</li>
        </ul>
        <ul className='address'>
            <li id='address'>Adres</li>
            <li>Ortaköy, Çırağan Cd.</li>
            <li>No:40, 34349</li>
            <li>Beşiktaş/İstanbul</li>
        </ul>

        <ul className='footnav'>
          <a href='/about'>Hakkımızda</a>
          <a href='/kelrot.com'>Medya</a>
          <a href='/kelrot.com'>Sponsorlar</a>
          <a href='/kelrot.com'>FRC</a>
          <a href='/kelrot.com'>TEKNOFEST</a>
          <a href='/kelrot.com'>Dokümantasyon</a>
          <a href='/kelrot.com'>Blog</a>
        </ul>
      </div>
    )
  }
}

export default Footer;