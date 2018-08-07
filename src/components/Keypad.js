// Code Keypad Component Here
import React, { Component } from "react";

export default class Keypad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        onKeyUp={() => console.log("Entering password...")}
        type="password"
      />
    );
  }
}
