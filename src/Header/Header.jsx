import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <ul className="header">
        <li>
          <select id="sortOption" onChange={this.props.sortOpt}>
            <option>name A-Z</option>
            <option>name Z-A</option>
            <option>ABV min</option>
            <option>ABV max</option>
          </select>
        </li>

        <li>
          <h2>Beer collection</h2>
        </li>

        <li>
          <input type="text" id="search" onChange={this.props.loadBeerList} />
        </li>
      </ul>
    );
  }
}

export default Header;
