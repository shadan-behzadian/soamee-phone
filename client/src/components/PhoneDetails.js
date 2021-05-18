import React, { Component } from "react";
import Loading from "./Loading";
import "../style/phoneDetails.css";

class PhoneDetails extends Component {
  render() {
    if (this.props.detail) {
      return (
        <div style={{ display: this.props.isVisible ? "inline" : "none" }}>
          <div className="phoneDetails slideDown">
            <p>Type: {this.props.detail.name}</p>
            <p>Description: {this.props.detail.description}</p>
            <p>Manufacturer: {this.props.detail.manufacturer}</p>
            <p>Color: {this.props.detail.color}</p>
            <p>Price:${this.props.detail.price}</p>
            <p>Processor: {this.props.detail.processor}</p>
            <p>Ram: {this.props.detail.ram}</p>
            <p>Screen: {this.props.detail.screen}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: this.props.isVisible ? "inline" : "none" }}>
          <Loading />
        </div>
      );
    }
  }
}
export default PhoneDetails;
