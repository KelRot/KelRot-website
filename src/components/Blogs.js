import React, { Component } from 'react';
import * as sty from '../Styles';
import Axios from 'axios';


class Blogs extends Component{
  constructor(props){
    super(props);
    this.state = {
      divs: []
    };
  }

  componentDidMount(){
    Axios.post('http://localhost:3001/getLatest',
    {

    }).then(response => {
      if(response.data.result){
        let d = response.data.data;
        d = d.reverse();
        let temp = [];
        for(let i = 0; i < d.length; ++i){
          let date = new Date(parseInt(d[i].date)).toLocaleString('en-GB').split(',')[0];
          temp.push(
            <div style={sty.boxStyle} key={i}>
              <div style={sty.h1BlogStyle} key={i + 86}>
                <a href={'http://localhost:3000/blog/' + d[i].pageName}>
                  {d[i].pageTitle}
                </a>
              </div>   
              <div style={{
                float: 'right',
                padding: '20px 20px'
              }}>
                {date}
              </div>
            </div>
          );
        }
        this.setState({divs: temp});
      }
    });
  }

  render() {
    return (
      <div style={{overflow: 'auto'}}>
        {this.state.divs}
      </div>
    )
  }
}

export default Blogs;