import React, { Component } from 'react';
import './StockList.css';

class Stock extends Component {
  render() {
    return (
      <div className="element">
        <img src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"/>
        <div>
          <p>Test</p>
          <p>NSDAQ</p>
        </div>
      </div>
    );
  }
}

export default Stock;
