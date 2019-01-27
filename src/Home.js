import React, { Component } from 'react';
import Nav from "./Nav";
import StockList from "./StockList";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <StockList />
      </div>
    );
  }
}

export default Home;
