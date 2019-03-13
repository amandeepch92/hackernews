import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/header";
import Homepage from "./body/homepage/homepage";
import Comments from "./body/comments/comments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Homepage/>
        {/*<Comments/>*/}
      </div>
    );
  }
}

export default App;
