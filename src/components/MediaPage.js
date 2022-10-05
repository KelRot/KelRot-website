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
          let d = response.data.data, temp = [], widths = [];
          for(let i = 0; i < d.length; ++i){
            const newImage = new Image();
            newImage.src = d[i].l;
            widths.push(newImage.width * 150 / newImage.height);
          }
          let cur = 20, c = 0;
          for(let i = 0; i <= d.length; ++i){
            if(i == d.length || cur + widths[i] + 20 > 1080){
              for(let j = 1; j <= c; ++j){
                if(j > 1){
                  temp.push(
                    <div style={{...sty.boxStyle, ...{maxWidth: widths[i - j], float: 'left', marginLeft: (1060-cur)/(c-1) + 'px', marginRight: 0}}} class='img' key={j*37+i*36+10000}>
                      <img src={d[i - j].l} style={{
                        maxHeight: '150px',
                      }} key={i*36+j*37}/>
                    </div>
                  );
                }else{
                  temp.push(
                    <div style={{...sty.boxStyle, ...{maxWidth: widths[i - j], float: 'left', marginLeft: '20px', marginRight: 0}}} class='img' key={j*37+i*36+10000}>
                      <img src={d[i - j].l} style={{
                        maxHeight: '150px',
                      }} key={i*36+j*37}/>
                    </div>
                  );
                }
              }
              if(i < d.length)
                cur = widths[i] + 20;
              c = 1;
            }
            else{
              c += 1;
              cur += widths[i];
            }
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