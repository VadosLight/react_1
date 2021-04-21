import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";

//https://api.punkapi.com/v2/beers/random

class App extends React.Component {
  state = {
    beerList: undefined,
    sortBy: "nameAZ",
  };
  //sortBy can contain nameAZ, nameZA, abvFromMin, abvFromBig

  loadData = async () => {
    // e.preventDefault();

    let beerName = "";

    const name = document.getElementById("search").value;
    if (name) {
      beerName = `&beer_name=${name}`;
    } else {
      beerName = "";
    }

    const API_URL = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=80${beerName}`
    );
    const data = await API_URL.json();

    this.setState({
      beerList: data.map((e) => {
        return {
          name: e.name,
          abv: e.abv,
          img: e.image_url,
          description: e.description,
        };
      }),
    });

    // console.log(data);
    console.log(this.state);
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="appication">
        <Header loadBeerList={this.loadData}></Header>
        <Body appState={this.state}></Body>
      </div>
    );
  }
}

export default App;
