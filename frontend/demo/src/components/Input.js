import React, { Component } from "react";
export default class Input extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <div className="pure-control-group">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            className="form-control"
            id={this.props.id}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            required={this.props.required}
          />
        </div>
      </div>
    );
  }
}
