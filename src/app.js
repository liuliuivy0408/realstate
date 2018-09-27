import React, { Component } from 'react';
import Nav from './components/Nav';
import Slide from './components/Slide';
import Content from './components/Content';
import "./common/css/bootstrap.css";
import "./common/css/jquery.fancybox.css";
import "./common/css/style.css";
import logo from "./common/images/logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Slide />
        <Content />
      </div>
    );
  }
}

export default App;
