import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props){
    super(props);
    this.state = {
      say: 'hello'
    }
  }
  render(){
    return(
      <div className="div">
      </div>
    )
  }
}

export default Stateful;
