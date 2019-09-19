import React, { Component } from "react";
export default class Input extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <div className="pure-control-group">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
