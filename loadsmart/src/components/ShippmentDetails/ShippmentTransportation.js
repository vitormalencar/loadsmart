import React from "react";
import StarRatings from "react-star-ratings";
import { EquipmentTypeIcon } from "../../lib/EquipmentType";

const ShippmentTransportation = ({
  weight,
  commodity,
  equipmentType,
  equipmentSize,
  shipperRatingScore
}) => {
  const equipment = EquipmentTypeIcon(equipmentType);
  return (
    <div className="transportation">
      <div className="transportation-type">
        <span className={equipment.icon} />
        <p>
          {equipment.name} {equipmentSize}
        </p>
      </div>
      <div>
        <h4>Commodity</h4>
        <p>{commodity}</p>
      </div>
      <div>
        <h4>weight</h4>
        <p>
          <span>{weight}</span>lb
        </p>
      </div>
      <div>
        <h4>Shipper rating</h4>
        <div className="transportation-ratings">
          <span>{shipperRatingScore} </span>
          <StarRatings
            name="rating"
            rating={shipperRatingScore}
            starDimension="10px"
            starSpacing="2px"
            starRatedColor={"orange"}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippmentTransportation;
