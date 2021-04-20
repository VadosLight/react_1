import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <ul className="header">
        <li>Beer collection</li>
        <li>Beer collection</li>
        <li>Beer collection</li>
        <li>Beer collection</li>
        <li><input type="text" id="search" onChange={this.props.beerList}/></li>
      </ul>
    );
  }
}

export default Header;
