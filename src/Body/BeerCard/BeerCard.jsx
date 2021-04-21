import "./BeerCard.css";
import React from "react"

class BeerCard extends React.Component {
  render() {
    return <div className="beer-list__beer-card">
      <div className="beer-name">{this.props.beer.name}</div>
      <div className="beer-abv">{this.props.beer.abv}</div>
      <img className="beer-img" src={this.props.beer.img} alt={this.props.beer.name}></img>
      <div className="beer-description">{this.props.beer.description}</div>
      
    </div>;
  }
}

export default BeerCard;
