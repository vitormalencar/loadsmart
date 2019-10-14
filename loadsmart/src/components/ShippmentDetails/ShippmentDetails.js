import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShippmentPickup from './ShippmentPickup'
import ShippmentDelivery from './ShippmentDelivery'
import ShippmentTransportation from './ShippmentTransportation'
import ShippmentMap from './ShippmentMap'

import { getShippment } from '../../ducks/shippment'

import './ShippmentDetails.css'
import Loader from '../Loader/Loader'
import { getLoadingState } from '../../ducks/shippment'

class ShippmentDetails extends Component {
  render() {
    const { shippment, loading } = this.props
    const pickup = shippment.stops[0]
    const destination = shippment.stops[1]

    return (
      <div className="shippment-details">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="shipment-map-mobile">
              <ShippmentMap src={shippment.map} />
            </div>
            <div className="shippment-info">
              <h2>
                {`${pickup.city}, ${pickup.state} `}
                {`${destination.city}, ${destination.state} `}
              </h2>
            </div>
            <div className="shippment-container">
              <div className="shippment-address">
                <ShippmentPickup {...pickup} />
                <ShippmentDelivery {...destination} />
              </div>
              <div className="shipment-map-desktop">
                <ShippmentMap src={shippment.map} />
              </div>
            </div>
            <ShippmentTransportation {...shippment} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shippment: getShippment(state),
  loading: getLoadingState(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippmentDetails)
