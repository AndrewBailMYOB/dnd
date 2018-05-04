import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Blue extends Component {
  render() {

    return <div style={{ backgroundColor: "blue", border: "4px", borderColor: "black", width: "40px", height: "40px", borderStyle: "solid"}}>
      {this.props.children}
    </div>;
  }
}

Blue.propTypes = {
  children: PropTypes.node
};