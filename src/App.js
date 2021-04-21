import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";

const perPage = 10;

class App extends React.Component {
  
  state = {
    beerList: [],
    sortBy: "name A-Z",
    page: 1,
    
  };

  loadData = async () => {
    // e.preventDefault();
    let beerName = "";
    this.setState({
      page: 1,
    });

    const name = encodeURIComponent(document.getElementById("search").value);

    if (name) {
      beerName = `&beer_name=${name}`;
    } else {
      beerName = "";
    }

    const API_URL = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}${beerName}`
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

    console.log(this.state);
  };

  loadMoreData = async () => {
    let beerName = "";
    
    const name = encodeURIComponent(document.getElementById("search").value);
    this.setState({
      page: this.state.page+1,
    });

    if (name) {
      beerName = `&beer_name=${name}`;
    } else {
      beerName = "";
    }

    const API_URL = await fetch(
      `https://api.punkapi.com/v2/beers?page=${this.state.page+1}&per_page=${perPage}${beerName}`
    );
    const data = await API_URL.json();

    this.setState({
      beerList: this.state.beerList.concat(
        data.map((e) => {
          return {
            name: e.name,
            abv: e.abv,
            img: e.image_url,
            description: e.description,
          };
        })
      ),
    });
  };

  sortBy = () => {
    const sortOpt = document.getElementById("sortOption").value;
    this.setState({
      sortBy: sortOpt,
    });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="appication">
        <Header loadBeerList={this.loadData} sortOpt={this.sortBy}></Header>
        <Body appState={this.state}></Body>
        <button id="btnLoadMore" onClick={this.loadMoreData}>
          Load more...
        </button>
      </div>
    );
  }
}

export default App;
