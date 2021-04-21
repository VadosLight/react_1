import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <ul className="header">
        <li>Сортировка</li>
        <li>
          <h2>Beer collection</h2>
        </li>
        <li>
          <input
            type="text"
            id="search"
            onChange={this.props.loadBeerList}
            onLoad={this.props.loadBeerList}
          />
        </li>
      </ul>
    );
  }
}

export default Header;
