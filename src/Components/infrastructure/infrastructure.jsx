import React from "react";
import "./infrastructure.css";
import MachineCard from "./machine-card";

function Infrastructure(props) {
  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/covers/infrastructure-header.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="main-content">
        <div className="container">
          <div className="content-title">
            <h1>
              Infrastructure of <span>VR TECHNOCRAFT</span>
            </h1>
          </div>
          <p>
            VR TECHNOCRAFT has 11 Years of work experience with critical
            operation for CNC Water Jet Cutting. Our job shop is very well
            equipped with state-of-the-art machinery to carry out multiple
            profile cutting processes.
          </p>
          <p>
            We have various departments in such as CAD design & Engineering,
            Marketing, Quality Control and Workshop area. We have the world
            Fastest water jet cutting technology machines. We have state of the
            art CNC Waterjet machines of KMT Germany having following
            specifications:
          </p>
          <h3>OUTSIDE Water Jet Cutting Facility</h3>
          <MachineCard></MachineCard>
          <h3>L&T HED IN HOUSE Water Jet Cutting Facility</h3>
          <MachineCard></MachineCard>
          <MachineCard></MachineCard>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Infrastructure;
