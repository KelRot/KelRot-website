import React, { Component } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import * as sty from '../Styles';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const parse = (e) => {
  return HTMLReactParser(e);
}

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      c: '',
      date: '',
      author: ''
    }
    
  }


  componentDidMount(){
    let {blogname} = this.props.params;
    this.setState({text: blogname}); 
    Axios.post('http://localhost:3001/',
    {
      pageName: blogname    
    }).then(response => {
      if(response.data.result){
        this.setState({c: parse(response.data.page)});

        let date = new Date(parseInt(response.data.date)).toLocaleString('en-GB').split(',')[0];
        this.setState({date: 
          <div style={{...sty.boxStyle, ...{width: '275px', float: 'right', display: 'flex', justifyContent: 'center', marginTop: '0'}}}>
            <i><p style={{...sty.pStyle, ...{margin: '25px 0 0 0'}}}>Tarih :  {date}</p></i>
          </div>
        });

        this.setState({author: 
          <div style={{...sty.boxStyle, ...{width: '275px', float: 'right', display: 'flex', justifyContent: 'center', marginTop: '0'}}}>
            <i><p style={{...sty.pStyle, ...{margin: '25px 0 0 0'}}}>Yazar :  {response.data.author}</p></i>
          </div>
        });
      }
    });

    this.interval = setTimeout(() => {
      this.setState({ time: Date.now() });

      document.querySelectorAll('.box').forEach(item => (Object.keys(sty.boxStyle).forEach(key => item.style[key] = sty.boxStyle[key])));
      document.querySelectorAll('.h1').forEach(item => (Object.keys(sty.h1BlogStyle).forEach(key => item.style[key] = sty.h1BlogStyle[key])));
      document.querySelectorAll('.h2').forEach(item => (Object.keys(sty.h2Style).forEach(key => item.style[key] = sty.h2Style[key])));
      document.querySelectorAll('.p').forEach(item => (Object.keys(sty.pBlogStyle).forEach(key => item.style[key] = sty.pBlogStyle[key])));
      document.querySelectorAll('.img').forEach(item => (Object.keys(sty.imgStyle).forEach(key => item.style[key] = sty.imgStyle[key])));

    }, 100);
  }
    

  render() {
    return (
      <div style={{overflow: 'auto'}}>
        {this.state.c}
        {this.state.author}
        {this.state.date}
      </div>
    )
  }
}

export default withParams(Blog);