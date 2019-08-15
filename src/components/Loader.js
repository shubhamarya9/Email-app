import React, { Component } from "react";

export default class Loader extends Component {
  componentDidMount() {
    return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p />
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Sent Successfully</h2>
      </div>
    );
  }
}
