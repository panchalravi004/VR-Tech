import React from "react";
import "./cuttingProcess.css";

function CuttingProcess(props) {
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
            <h1>Cutting Process</h1>
          </div>
          <div className="cutting-process-img d-flex justify-content-center">
            <figure>
              <img
                src={require("../../assets/cutting-process.png")}
                alt="cutting-process"
              ></img>
            </figure>
          </div>
          <h3 className="d-flex justify-content-center">
            HIGH PRESSURE PUMP TECHNOLOGY
          </h3>
          <p>
            The waterjet pump has been called the heart of the water jet system,
            pressurizing the water to thousands of pounds per square inch and
            then pushing it through to the cutting head, where it will be
            emitted at high velocities through a tiny orifice. With such an
            important role to fill, the pump must be able to meet high usage
            demands and precision requirements.
          </p>
          <p>
            There are two variations of pumps to pressurize the water for
            cutting - Direct Drive & Intensifier.
          </p>
          <p>
            Direct drive pumps offer large volumes of high-pressure water. Their
            pressure ranges, however, are limited to 55,000-60,000 PSI |
            3.800-4.100 bar, so direct drives pumps are best utilized in
            applications where cutting power without precise accuracy is
            required.
          </p>
          <p>
            Intensifier pumps operate with an electric motor driving a hydraulic
            pump that pressurizes the fluid circuit of the intensifier. The
            pressure is then increased twenty-fold and transferred to the
            highpressure water system to deliver consistent pressure up to
            90,000 PSI | 6.200 bar. Intensifier pumps are used where consistent,
            precision cutting is demanded, such as in the aerospace, automotive
            and medical device industries and for intricate tile & stone inlay.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CuttingProcess;
