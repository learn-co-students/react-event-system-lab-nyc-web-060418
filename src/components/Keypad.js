// Code Keypad Component Here
import React, { Component } from 'react'
import EyesOnMe from './EyesOnMe'

class Keypad extends Component {

keyHandler = (event) => {
  console.log('Entering password...')
}

handleInputPassword = () => console.log('Entering password...')

render() {
  return (
    <div>
      <input type="password" onKeyUp={this.handleInputPassword}/>
    </div>
  )
}

}

export default Keypad;
