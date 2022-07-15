import React, { Component } from 'react'

import img1 from '../images/slider1.JPG';
import img2 from '../images/slider2.JPG';
import img3 from '../images/slider3.JPG';
import img4 from '../images/slider4.jpg';
import img5 from '../images/slider5.jpg';

class Slider extends Component {
  render() {
    return (
      <div className='slider'>
        <figure>
          <div>
            <img src={img1} alt=''/>
            <h1>Slider 1</h1>
          </div>
          <div>
            <img src={img2} alt=''/>
            <h1>Slider 2</h1>
          </div>
          <div>
            <img src={img3} alt=''/>
            <h1>Slider 3</h1>
          </div>
          <div>
            <img src={img4} alt=''/>
            <h1>Slider 4</h1>
          </div>
          <div>
            <img src={img5} alt=''/>
            <h1>Slider 5</h1>
          </div>
        </figure>
      </div>
    )
  }
}

export default Slider;