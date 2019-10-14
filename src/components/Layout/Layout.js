import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
