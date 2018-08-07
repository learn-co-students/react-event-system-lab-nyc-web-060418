// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  actionForOnFocus = (event) => {
    console.log('Good!')
  }

  actionForOnBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.actionForOnFocus} onBlur={this.actionForOnBlur}></button>
    )
  }
}
