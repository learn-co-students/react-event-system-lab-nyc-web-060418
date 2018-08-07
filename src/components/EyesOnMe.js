// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    
    blurLog = () => {
        console.log('Hey! Eyes on me!')
    }

    focusLog = () => {
        console.log('Good!')
    }
    
    
    render() {
        return (
            <button 
                onFocus={this.focusLog}
                onBlur={this.blurLog}
            >
            Eyes On Me</button>
        );
    }
}

export default EyesOnMe;
