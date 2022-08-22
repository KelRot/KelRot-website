import React, { Component } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

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
      text: ""
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
        this.setState({text: response.data.message});
      }
    });
  }


  render() {
    return (
      <div style={{
        height: '100px'
      }}>

        <p>{parse(this.state.text)}</p>
      </div>
    )
  }
}

export default withParams(Blog);