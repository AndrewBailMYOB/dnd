import React, {Component} from "react";
import PropTypes from "prop-types";
import Blue from "./blue";
import Green from "./green";

export default class Red extends Component {
  render() {
    debugger;
    let blue = () => {
      debugger;
      let max = 5, blues = [], i;
      let wareGreen = this.props.greenPlace;
      for (i = 0; i < max; i++) {
        if (i === wareGreen) {
          blues.push(
            <Blue>
              <Green/>
            </Blue>
          );
        } else {
          blues.push(<Blue/>);
        }
      }
      return blues;
    };
    return (
      <div>
        {blue()}
      </div>
    );
  }
}

Red.propTypes = {
  greenPlace: PropTypes.number
};