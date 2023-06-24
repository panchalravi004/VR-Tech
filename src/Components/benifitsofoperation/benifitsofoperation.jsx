import React from "react";
import "./benifitsofoperation.css";

function BenifitsOfOperation(props) {
  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/covers/about.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="container-fluid p-0">
        <div className="container d-flex justify-content-center">
          <div className="benifit-content-title my-5">
            <h2>
              Benifits of Operations
            </h2>
          </div>
        </div>
        <div className="container-fluid p-0 mb-5">
          <p className="benifit-detail">
            An important benefit of the water jet is the ability to cut material without interfering with its inherent
            structure, as there is no heat-affected zone (HAZ). Minimizing the effects of heat allows metals to be
            cut without harming or changing intrinsic properties. Sharp corners, bevels, pierce holes, and shapes
            with minimal inner radii are all possible.<br/><br/>

            Water jet cutters are also capable of producing intricate cuts in material. With specialized software and
            3-D machining heads, complex shapes can be produced.<br/><br/>

            The kerf, or width, of the cut can be adjusted by swapping parts in the nozzle, as well as changing the
            type and size of abrasive. Typical abrasive cuts have a kerf in the range of 0.04 to 0.05 in (1.0–1.3 mm),
            but can be as narrow as 0.02 inches (0.51 mm). Non-abrasive cuts are normally 0.007 to 0.013 in (0.18–
            0.33 mm), but can be as small as 0.003 inches (0.076 mm), which is approximately that of a human
            hair. These small jets can permit small details in a wide range of applications.<br/><br/>

          </p>
          <figure className="middle-image-figure">
            <img
              src={require("../../assets/covers/infrastructure-header.jpg")}
              alt="infrastructure-header"
            ></img>
            <h2 className="middle-image-title">Water Jets</h2>
          </figure>
          <p className="benifit-detail">
          
            Water jets are capable of attaining accuracy down to 0.005 inches (0.13 mm) and repeatability down to
            0.001 inches (0.025 mm).<br/><br/>

            Due to its relatively narrow kerf, water jet cutting can reduce the amount of scrap material produced,
            by allowing uncut parts to be nested more closely together than traditional cutting methods. Water
            jets use approximately 0.5 to 1 US gal (1.9–3.8 l) per minute (depending on the cutting head's orifice
            size), and the water can be recycled using a closed-loop system. Waste water usually is clean enough to
            filter and dispose of down a drain. The garnet abrasive is a non-toxic material that can be mostly
            recycled for repeated use; otherwise, it can usually be disposed in a landfill. Water jets also produce
            fewer airborne dust particles, smoke, fumes, and contaminants, reducing operator exposure to
            hazardous materials.<br/><br/>

            Metal cutting using waterjet technology eliminates the risk of cross contamination since the contact
            medium is discarded. 
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BenifitsOfOperation;
