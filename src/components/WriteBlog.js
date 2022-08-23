import React, { Component } from 'react';
import Axios from 'axios';
import HTMLReactParser from 'html-react-parser';
const parse = (e) => {
  return HTMLReactParser(e);
}

const st = {
  borderTop: '2px solid black',
  marginTop: '100px',
  padding: '100px 0',
  width: '1000px'
};


class WriteBlog extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: '',
      pass: '',
      page: '',
      status: 'Not submitted yet'
    }
    this.submit = () => {
      let pageString = this.state.text;
      let writerPass = this.state.pass;
      let page = this.state.page;
      Axios.post('http://localhost:3001/changePage',
      {
        page: page,
        pass: writerPass,
        pageString: pageString
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

  


  render() {
    return (
      <div>
        <textarea type="text" onChange={e => this.setState({text: e.target.value})} cols='85' rows='5' class='writeBlog'></textarea>
        <input type="text" onChange={e => this.setState({pass: e.target.value})} placeholder="password" class='writeBlogInput'></input>
        <input type="text" onChange={e => this.setState({page: e.target.value})} placeholder="page" class='writeBlogInput'></input>
        <button class='writeBlogButton' onClick={this.submit}>Yayınla</button>
        <span class='writeBlogButton'>{this.state.status}</span>
        <div style={st}>  
          {parse(this.state.text)}
        </div>
      </div>
    )
  }
}

export default WriteBlog;