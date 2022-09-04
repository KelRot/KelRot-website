import React, { Component } from 'react'
import s from '../text/mainpage';

const url ={
  kabatas: s.kabatas.l,
  first: s.frc.l,
  teknofest: s.teknofest.l
}

const information ={
  us: s.bizkimiz.t,
  kabatas: s.kabatas.t,
  first: s.frc.t,
  teknofest: s.teknofest.t
}

class Info extends Component {
  render() {
    return (
      <div className='info'>

        <div className='us'>
          <h1>Biz Kimiz?</h1>
          <p>{information.us}</p>
        </div>

        <div className='blog'>
          <h1>Blog</h1>
          
        </div>

        <div className='school'>
            <div className='form' id='form2'>
            <h1>Kabataş Erkek Lisesi <a href={url.kabatas}>Siteye git</a></h1>
            <p>{information.kabatas}</p>
          </div>
        </div>

        <div className='seasons'>

        </div>

        <div className='first'>
          <div className='form'>
            <h1>FIRST <a href={url.first}>Siteye git</a></h1>
            <p id='block'>{information.first}</p>
          </div>
        </div>

        <div className='teknofest'>
            <div className='form'>
            <h1>TEKNOFEST <a href={url.teknofest}>Siteye git</a></h1>
            <p id='block'>{information.teknofest}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Info;