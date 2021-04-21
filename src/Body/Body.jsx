import React from "react";
import "./Body.css";
import BeerCard from "./BeerCard/BeerCard";

class Body extends React.Component {
  render() {
    // console.log(this.props.appState);
    let beers = [
      {
        name: "e.name",
        abv: "e.abv",
        img: "e.image_url",
        description: "e.description",
      },
    ];

    if (this.props.appState.beerList) {
      beers = this.props.appState.beerList;

    }

    const renderBeers = beers.map((item) => <BeerCard beer={item}></BeerCard>);
    // console.log("1================");
    // console.log(renderBeers);
    // console.log("1================");

    return (
      <div className="beer-list">
        {renderBeers}
      </div>
    );
  }
}

export default Body;
