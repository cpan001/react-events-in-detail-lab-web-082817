// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
  handleClick = e => {
    const arr = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(arr);
  };

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}
