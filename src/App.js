import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import ShippmentList from "./components/ShippmentList/ShippmentList";
import ShippmentDetails from "./components/ShippmentDetails/ShippmentDetails";

class App extends Component {
  render() {
    return (
      <Layout>
        <ShippmentList />
        <ShippmentDetails />
      </Layout>
    );
  }
}

export default App;
