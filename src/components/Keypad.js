import React, { Component } from 'react'

class Keypad extends Component {

    handleInput = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.handleInput} />
        )
    }


}

export default Keypad;