import React from "react";
import "./Body.css";
import BeerCard from "./BeerCard/BeerCard";
import {
  sortObjectAZ,
  sortObjectZA,
  sortObjectAbvMin,
  sortObjectAbvMax,
} from "./utils";

class Body extends React.Component {
  beers = [
    {
      name: "e.name",
      abv: "e.abv",
      img: "e.image_url",
      description: "e.description",
    },
  ];

  prepareBeerList() {
    if (this.props.appState.beerList) {
      this.beers = this.props.appState.beerList;
    }

    switch (this.props.appState.sortBy) {
      case "name A-Z":
        this.beers = sortObjectAZ({ obj: this.beers });
        break;
      case "name Z-A":
        this.beers = sortObjectZA({ obj: this.beers });
        break;
      case "ABV min":
        this.beers = sortObjectAbvMin({ obj: this.beers });
        break;
      case "ABV max":
        this.beers = sortObjectAbvMax({ obj: this.beers });
        break;
      default:
        break;
    }

    return this.beers.map((item, index) => (
      <BeerCard key={index} beer={item}></BeerCard>
    ));
  }

  render() {
    return <div className="beer-list">{this.prepareBeerList()}</div>;
  }
}

export default Body;
