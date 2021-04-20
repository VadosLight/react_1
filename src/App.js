import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";

//https://api.punkapi.com/v2/beers/random

class App extends React.Component {
  loadData = async (e) => {
    e.preventDefault();
    const name = document.getElementById("search").value;
    //&beer_name=${name}

    const API_URL = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=80`
    );
    const data = await API_URL.json();

    console.log(data);
  };

  render() {
    return (
      <div className="appication">
        <Header beerList={this.loadData}></Header>
        <Body></Body>
      </div>
    );
  }
}

export default App;
