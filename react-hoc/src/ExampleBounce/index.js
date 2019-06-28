import React, { Component } from 'react';
import {debounce,decDebounce} from './util'
// 防抖
class ExampleBounce extends Component {
  state = {  }
  handleSubmit(){
    console.log('submit request')
  }
  render() { 
    return ( 
      <div>
        <button onClick={this.handleSubmit}>提交订单</button>
      </div>
     );
  }
}
 
export default ExampleBounce;