import React from "react";
import "./Body.css";

class Body extends React.Component {
  render() {
    return <div className="beer-list">Body {this.props.loadData}</div>;
  }
}

export default Body;
