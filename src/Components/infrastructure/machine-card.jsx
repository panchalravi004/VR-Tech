import React from "react";
import "./infrastructure.css";

function MachineCard(props) {
  return (
    <div className="infrastructure-machine">
      <div className="machine-description">
        <ul>
          <li>Table Size: - 10500mm x 4050mm x 400mm</li>
          <li>Maximum Plate Cutting Size: - 15000 x 4050 x 400mm</li>
          <li>Cutting Capacity Up to: - 400 mm Thickness</li>
          <li>Pump Capacity: - 6200 Bar (90,000 Psi)</li>
          <li>Machine Make: - KMT 60 HP PRO-III</li>
          <li>Gantry Type: -Hiwin Rack & Pinion</li>
        </ul>
      </div>
      <div className="machine-image">
        <figure>
          <img
            src={require("../../assets/GRID-PRO-60HP-WATERJET-PUMP-3.jpg")}
            alt="machine-1"
          />
        </figure>
      </div>
      {false && (
        <div className="col-5">
          <div className="description"></div>
        </div>
      )}
    </div>
  );
}

export default MachineCard;
