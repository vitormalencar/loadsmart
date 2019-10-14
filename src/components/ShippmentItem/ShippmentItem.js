import React, { Component } from "react";
import "./ShippmentItem.css";
import { shortDate } from "../../lib/dateFormater";
import CurrencyFormat from "react-currency-format";
import { EquipmentTypeIcon } from "../../lib/EquipmentType";

const activeStyle = {
  backgroundColor: "white",
  border: "1px solid #e6e6e6"
};

export default class ShippmentItem extends Component {
  render() {
    const { active, fare, equipmentSize, equipmentType, stops } = this.props;

    const start = stops[0];
    const destination = stops[1];
    const equipment = EquipmentTypeIcon(equipmentType);

    return (
      <div className="shippment-item" style={active ? activeStyle : {}}>
        <div className="carrier">
          <div className="vehicle">
            <span className={equipment.icon} />
            <span>{`  ${equipment.name}  ${equipmentSize}`}</span>
          </div>
          <div className="price">
            <p>
              <CurrencyFormat
                value={fare}
                decimalScale={2}
                displayType="text"
                thousandSeparator
                prefix="$"
              />
            </p>
          </div>
        </div>
        <div className="information">
          <div>
            <div className="city-name">
              {start.city} {start.state} {start.zipcode}
            </div>
            <div className="date">{shortDate(start.windowStart)}</div>
          </div>
          <div>
            <div className="city-name">
              {destination.city} {destination.state} {destination.zipcode}
            </div>
            <div className="date">{shortDate(destination.windowEnd)}</div>
          </div>
        </div>
      </div>
    );
  }
}
