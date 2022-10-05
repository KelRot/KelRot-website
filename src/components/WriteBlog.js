import React, { Component } from 'react';
import Axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import * as sty from '../Styles';

const parse = (e) => {
  return HTMLReactParser(e);
}

const st = {
  borderTop: '2px solid black',
  padding: '100px 0',
  width: '1080px'
};


class WriteBlog extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: '',
      pass: '',
      page: '',
      status: 'Not submitted yet',
      c: '',
      author: '',
      title: ''
    }
    this.submit = () => {
      let pageString = this.state.text;
      let writerPass = this.state.pass;
      let page = this.state.page;
      let date = Date.now();
      let author = this.state.author;
      let title = this.state.title;
      Axios.post('http://localhost:3001/changePage',
      {
        page: page,
        pass: writerPass,
        pageString: pageString,
        date: date,
        author: author,
        title: title
      }).then(response => {

        let data = response.data;
        
        if(data.result == 0){

          this.setState({status: 'Wrong password'});

        }else{

          this.setState({status: 'Success'});

        }
      });
    }
  }
  componentDidMount(){
    const interval = setInterval((e) => {
      this.setState({text: document.querySelector('.writeBlog').value});
      this.setState({c: parse(this.state.text)});

      document.querySelectorAll('.box').forEach(item => (Object.keys(sty.boxStyle).forEach(key => item.style[key] = sty.boxStyle[key])));
      document.querySelectorAll('.h1').forEach(item => (Object.keys(sty.h1BlogStyle).forEach(key => item.style[key] = sty.h1BlogStyle[key])));
      document.querySelectorAll('.h2').forEach(item => (Object.keys(sty.h2Style).forEach(key => item.style[key] = sty.h2Style[key])));
      document.querySelectorAll('.p').forEach(item => (Object.keys(sty.pBlogStyle).forEach(key => item.style[key] = sty.pBlogStyle[key])));
      document.querySelectorAll('.img').forEach(item => (Object.keys(sty.imgStyle).forEach(key => item.style[key] = sty.imgStyle[key])));
      
    }, 200);
  }

  

  render() {
    return (
      <div>
        <textarea type="text" cols='85' rows='5' class='writeBlog'></textarea>
        <input type="text" onChange={e => this.setState({pass: e.target.value})} placeholder="password" class='writeBlogInput'></input>
        <input type="text" onChange={e => this.setState({page: e.target.value})} placeholder="page" class='writeBlogInput'></input>
        <input type="text" onChange={e => this.setState({author: e.target.value})} placeholder="author" class='writeBlogInput'></input>
        <input type="text" onChange={e => this.setState({title: e.target.value})} placeholder="pagetitle" class='writeBlogInput'></input>
        <button class='writeBlogButton' onClick={this.submit}>Yayınla</button>
        <button class='writeBlogButton'>{this.state.status}</button>
        <div style={st}>  
          {this.state.c}
        </div>
      </div>
    )
  }
}

export default WriteBlog;