import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchShipments,
  getLoadingState,
  getShippmentsList,
  selectShippment
} from "../../ducks/shippments";
import { fetchShipmentDetails } from "../../ducks/shippment";

import Loader from "../Loader/Loader";
import ShippmentItem from "../ShippmentItem/ShippmentItem";

import "./ShippmentList.css";

class ShippmentList extends Component {
  state = {
    activeID: 1
  };

  requestHandle = id => {
    this.props.selectShippment(id);
    this.props.fetchShipmentDetails(id);
  };

  componentDidMount() {
    this.props.fetchShipments();
    this.requestHandle(this.state.activeID);
  }

  onClickHandler = id => {
    // prevent request the same item twice
    if (this.state.activeID !== id) {
      this.requestHandle(id);
      this.setState({ activeID: id });
    }
  };

  render() {
    const { loading, shippments } = this.props;
    return (
      <div className="shippment-list">
        {loading ? (
          <Loader />
        ) : (
          shippments.map(i => (
            <a href onClick={() => this.onClickHandler(i.id)} key={i.id}>
              <ShippmentItem active={i.active} {...i} />
            </a>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getLoadingState(state),
  shippments: getShippmentsList(state)
});

const mapDispatchToProps = {
  fetchShipments,
  selectShippment,
  fetchShipmentDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippmentList);
