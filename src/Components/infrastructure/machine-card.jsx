import React from "react";
import "./infrastructure.css";

function MachineCard({data}) {
  return (
    <div className="row infrastructure-machine">
      <div className={data ? "col-lg-6 machine-description order-lg-2" : "col-lg-6 machine-description order-lg-1"}>
        <ul>
          <li>Table Size: - 10500mm x 4050mm x 400mm</li>
          <li>Maximum Plate Cutting Size: - 15000 x 4050 x 400mm</li>
          <li>Cutting Capacity Up to: - 400 mm Thickness</li>
          <li>Pump Capacity: - 6200 Bar (90,000 Psi)</li>
          <li>Machine Make: - KMT 60 HP PRO-III</li>
          <li>Gantry Type: -Hiwin Rack & Pinion</li>
        </ul>
      </div>
      <div className={data ? "col-lg-6 machine-image order-lg-1" : "col-lg-6 machine-image order-lg-2" }>
        <figure>
          <img
            src={require("../../assets/others/GRID-PRO-60HP-WATERJET-PUMP-3.jpg")}
            alt="machine-1"
          />
        </figure>
      </div>
    </div>
  );
}

export default MachineCard;
