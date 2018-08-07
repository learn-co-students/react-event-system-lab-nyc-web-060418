import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focused = () => {
    return console.log('Good!')
  }

  blurred = () => {
    return console.log("Hey! Eyes on me!")
  }

  render(){
    return(<button onFocus={this.focused} onBlur={this.blurred}></button>)
  }
}
