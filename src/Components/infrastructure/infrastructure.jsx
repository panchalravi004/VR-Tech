import React from "react";
import "./infrastructure.css";
import MachineCard from "./machine-card";
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from "react";

function Infrastructure(props) {

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      <figure>
        <img src={require("../../assets/covers/infrastructure.jpg")}alt="infrastructure-header"></img>
      </figure>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="infrastructure-content-title my-5">
            <h2>
              Infrastructure of VR Technocraft
            </h2>
          </div>
        </div>
        <ul>
          <li>
            <p className="infrastructure-detail">
              VR TECHNOCRAFT has 11 Years of work experience with critical
              operation for CNC Water Jet Cutting. Our job shop is very well
              equipped with state-of-the-art machinery to carry out multiple
              profile cutting processes.
            </p>
          </li>
          <li>
            <p className="infrastructure-detail">
              We have various departments in such as CAD design & Engineering,
              Marketing, Quality Control and Workshop area. We have the world
              Fastest water jet cutting technology machines. We have state of the
              art CNC Waterjet machines of KMT Germany having following
              specifications:
            </p>
          </li>
          <li>
            <p className="infrastructure-detail">
              We have 16000 sq.ft covered shed for work & material storage at our
              outside premises.
            </p>
          </li>
          <li>
            <p className="infrastructure-detail">
              Material Handling Capacity : <b>25 MT Overhead</b> Crane & <b>20 MT Outside</b> Crane
            </p>
          </li>
        </ul>

        <div class="row my-5 mx-2">
          <div className="col-lg-12 crane-container">
            <img src={require("../../assets/crane.jpg")}  alt="infrastructure-header" className="crane-image"></img>
          </div>
        </div>

        <hr />

        <h4 className="infrastruture-machine-heading">VR Technocraft water jet cutting facility ( 1 & 2)</h4>
        <ScrollAnimation animateIn="fadeIn">
          <MachineCard></MachineCard>
        </ScrollAnimation>
        <h4 className="infrastruture-machine-heading">L&T HED IN HOUSE Water Jet Cutting Facility (3 & 4)</h4>
        <ScrollAnimation animateIn="fadeIn">
          <MachineCard data={true}></MachineCard>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeIn">
          <MachineCard></MachineCard>
        </ScrollAnimation> */}
      </div>
    </React.Fragment>
  );
}

export default Infrastructure;
