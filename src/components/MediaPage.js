import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import * as sty from '../Styles';
import s from '../text/media';
import Axios from 'axios';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class MediaPage extends Component {
  constructor(){
    super();
    this.state = {
      divs: []
    };
  }
  componentDidMount(){
    let {pagename} = this.props.params;
    Axios.post("http://localhost:3001/getImages/", {
      pagename: pagename
    })
      .then(response => {
        if(response.data.result){
          let d = response.data.data, temp = [];
          for(let i = 0; i < d.length; ++i){
            temp.push(
              <div style={boxStyle}>
                <img src={d[i].link} />
              </div>
            );
          }
          this.setState({divs: temp});
        }  
    });
  }


  render() {
    return (
      <div className='Media' style={{overflow: 'auto'}}>
        {this.state.divs}
      </div>
    )
  }
}

export default withParams(MediaPage);