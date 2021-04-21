import React from "react";
import "./Body.css";
import BeerCard from "./BeerCard/BeerCard";

class Body extends React.Component {
  render() {
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

    switch (this.props.appState.sortBy) {
      case "name A-Z":
        beers = sortObjectAZ(beers);
        break;
      case "name Z-A":
        beers = sortObjectZA(beers);
        break;
      case "ABV min":
        beers = sortObjectAbvMin(beers);
        break;
      case "ABV max":
        beers = sortObjectAbvMax(beers);
        break;
      default:
        break;
    }

    const renderBeers = beers.map((item, index) => (
      <BeerCard key={index} beer={item}></BeerCard>
    ));
    return <div className="beer-list">{renderBeers}</div>;
  }
}

function sortObjectAZ(obj) {
  return obj.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function sortObjectZA(obj) {
  return obj.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });
}

function sortObjectAbvMin(obj) {
  return obj.sort((a, b) => a.abv - b.abv);
}

function sortObjectAbvMax(obj) {
  return obj.sort((a, b) => b.abv - a.abv);
}

export default Body;
