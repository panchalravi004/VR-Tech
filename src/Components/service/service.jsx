import React from "react";
import "./service.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Service(props) {
  return (
    <React.Fragment>
      <div className=" service-header-image"></div>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="about-content-title my-5">
            <h2>Services By VR Technocraft</h2>
          </div>
        </div>
        <div className="service-section">
          <div className="d-flex justify-content-center">
            <h2 className="service-title">ABRASIVE WATERJET CUTTING</h2>
          </div>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row align-items-center my-5">
              <div
                className="col-lg-6"
                style={{ textAlign: "justify", marginRight: "10px" }}
              >
                <p>
                  Abrasive cutting methods are used for hard materials such as
                  metal, glass, minerals, concrete, glass composites, ceramics,
                  aluminum or silicone oxide. In other words, abrasive is added
                  where pure water is unable to cut the material properly. In the
                  abrasive cutting process, abrasive (consisting of fine
                  particles) is added to the waterjet. In the cutting head, water,
                  air and abrasive are mixed together and forced through the
                  focusing tube at high speed. The resulting high-energy jet is
                  capable of micro-eroding, i.e., drilling and cutting, materials
                  of great thicknesses and of the most diverse consistencies, such
                  as metals, ceramics, rock and even bullet-proof glass.
                </p>
              </div>
              <div className="col-lg-5 service-image">
                <figure>
                  <img
                    src={require("../../assets/abrasive-waterjet-cutting.jpg")}
                    alt="abrasive-waterjet-cutting"
                  />
                </figure>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row align-items-center my-5 ">
              <div className="col-lg-5 service-image">
                <figure>
                  <img
                    src={require("../../assets/work/work-9.jpg")}
                    alt="abrasive-waterjet-cutting"
                  />
                </figure>
              </div>
              <div
                className="col-lg-6"
                style={{ textAlign: "justify", marginRight: "10px" }}
              >
                <p>
                  A special abrasive head is mounted on the water nozzle. In this
                  head, the abrasive is mixed with the pressurized water. The
                  movement of the cutting head is normally CNC controlled through
                  the waterjet cutting unit. Early detection leakage points
                  protect the orifice body, nozzle pipe and nozzle nut against
                  damage, as they indicate if connections must be retightened or
                  seals replaced. Thanks to the unique design of the cutting head,
                  seals can be replaced in less than five minutes and without
                  tools. The precision performance combined with easy maintenance
                  of KMT Waterjet abrasive cutting heads offer unrivaled value.
                  Thanks to the simple design, orifices can be changed in seconds
                  without the need for any tools.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="service-section">
          <div className="d-flex justify-content-center">
            <h2 className="service-title">PURE WATERJET CUTTING</h2>
          </div>
          <br />
          <ScrollAnimation animateIn="fadeIn">
            <div className="row align-items-center my-4">
              <div
                className="col-lg-6 "
                style={{ textAlign: "justify", marginRight: "10px" }}
              >
                <p>
                  This method is primarily used for soft materials such as
                  plastics, textiles, paper, sealing materials, metal foils,
                  plywood, food, etc. Normal tap water is pressurized and forced
                  through a small precious stone orifice, so that a highly
                  powerful cutting jet is produced. This jet exits the orifice at
                  a speed of up to three times that of sound and can be used to
                  cut materials at high cutting speeds (determined by the
                  properties of the material).
                </p>
              </div>
              <div className="col-lg-5 service-image">
                <figure>
                  <img
                    src={require("../../assets/work/work-11.jpg")}
                    alt="pure-waterjet-cutting"
                  />
                </figure>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row align-items-center my-4 ">
              <div className="col-lg-5 service-image">
                <figure>
                  <img
                    src={require("../../assets/work/work-6.jpg")}
                    alt="pure-waterjet-cutting"
                  />
                </figure>
              </div>
              <div
                className="col-lg-6 "
                style={{ textAlign: "justify", marginRight: "10px" }}
              >
                <p>
                  Water is fed through specially designed pressure-proof flexible
                  pipelines to the cutting head. The cutting head consists of a
                  pneumatically operated valve and a nozzle tube with a precious
                  stone orifice (normally made in sapphire or diamond) at its
                  outlet. The cutting jet exits the orifice at up to three times
                  the speed of sound.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Service;
