import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="container">{this.props.match.params.title}</div>;
  }
}