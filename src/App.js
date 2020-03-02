import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFields: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  searchChange = e => {
    // console.log(this);
    this.setState({ searchFields: e.target.value });
  };

  render() {
    const { monsters, searchFields } = this.state;

    const filteredMonsters = monsters.filter(x =>
      x.name.toLowerCase().includes(searchFields.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search search={this.searchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
