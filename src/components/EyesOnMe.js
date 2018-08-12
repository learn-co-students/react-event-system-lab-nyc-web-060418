import React, { Component } from 'react';

class EyesOn extends Component {

    handleFocus = () => {
        console.log('Good!');
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur} ></button>
            </div>
        );
    }
}

export default EyesOn;
