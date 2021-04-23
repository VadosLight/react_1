import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";
import Popup from "./Popup/Popup.jsx";

const perPage = 10;

class App extends React.Component {
  state = {
    beerList: [],
    sortBy: "name A-Z",
    page: 1,
  };

  loadData = async () => {
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

    fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}${beerName}`
    )
      .then((response) => response.json())
      .catch((rej) => {
        console.log(rej);
      })
      .then((data) => {
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
      })
      .catch((rej) => {
        console.log(rej);
      });
  };

  loadMoreData = async () => {
    let beerName = "";

    const name = encodeURIComponent(document.getElementById("search").value);
    this.setState({
      page: this.state.page + 1,
    });

    if (name) {
      beerName = `&beer_name=${name}`;
    } else {
      beerName = "";
    }

    fetch(
      `https://api.punkapi.com/v2/beers?page=${
        this.state.page + 1
      }&per_page=${perPage}${beerName}`
    )
      .then((response) => response.json())
      .catch((rej) => {
        console.log(rej);
      })
      .then((data) => {
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
      })
      .catch((rej) => {
        console.log(rej);
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
        <Popup></Popup>
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
