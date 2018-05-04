import React from "react";
import ReactDOM from "react-dom";

import Red from "./dnd/red";
import {observe} from "./dnd/observer";

export default class RootComponent {
  render(container) {
    this.container = container;
    return (this.renderComponent());
  }

  renderComponent() {
    ReactDOM.render(
      <div style={{backgroundColor: "purple", width:"100vw", height: "100vh"}}>
        {
          observe((greenPlace) => (<Red greenPlace={greenPlace} />))
        }
      </div>,
      this.container,
    );
  }
}

