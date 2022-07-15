import React, { Component } from 'react'

const url ={
  kabatas: "https://kabataserkeklisesi.meb.k12.tr/",
  first: "https://www.firstinspires.org/",
  teknofest: "https://www.teknofest.org/"
}

const information ={
  us: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vel quam ipsa ut eius. Facere, tempora similique quia, inventore possimus est non totam accusantium aliquam eum distinctio, reiciendis fuga ducimus.",
  kabatas: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  first: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vel quam ipsa ut eius. Facere, tempora similique quia, inventore possimus est non totam accusantium aliquam eum distinctio, reiciendis fuga ducimus.",
  teknofest: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vel quam ipsa ut eius. Facere, tempora similique quia, inventore possimus est non totam accusantium aliquam eum distinctio, reiciendis fuga ducimus."
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