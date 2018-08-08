// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component{

  handleMouseOver = (e) => {
    console.log('Good!')
  }

  handleMouseLeave = (e) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return <button onFocus={this.handleMouseOver} onBlur={this.handleMouseLeave}/>
  }
}
