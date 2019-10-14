import React from "react";
import { shortDate, formatedHour } from "../../lib/dateFormater";
import { EquipmentTypeIcon } from "../../lib/EquipmentType";

const ShippmentDelivery = ({
  city,
  state,
  zipcode,
  windowEnd,
  windowStart,
  accessorials
}) => {
  return (
    <div className="shippment-delivery">
      <div>
        <p>DELIVERY</p>
        <h4>
          <span className="badge">2</span> {`${city}, ${state} ${zipcode} `}
        </h4>
        <p>{`${shortDate(windowStart)} /  ${formatedHour(
          windowStart
        )} - ${formatedHour(windowEnd)}`}</p>
        <div className="accessorial-wraper">
          {accessorials.map((item, index) => {
            const equipment = EquipmentTypeIcon(item);
            return (
              <div className="accessorial" key={index}>
                <span className={equipment.icon} style={{ fontSize: 30 }} />
                <p>{equipment.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShippmentDelivery;
