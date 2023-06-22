import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";

function About(props) {
  const clientList = [
    "siemens",
    "larsen-and-toubro",
    "l-and-t-defence",
    "isgec-titan",
    "isgec-hitachi-zosen-limited",
    "isgec",
    "global-wind-power",
    "gea",
    "ge",
    "devrekha-india",
    "alstom",
  ];

  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/covers/about.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="main-content">
        <div className="container">
          <div className="content-title">
            <h1>
              About <span>VR TECHNOCRAFT</span>
            </h1>
          </div>
          <p>
            VR TECHNOCRAFT is House of waterjet Profile Cutting services in the
            Surat, Gujarat, India. In the early years, we could not find anyone
            that would cut their products with the quality level and timeliness
            that they required. As a result, a new business waterjet cutting was
            born. We provide pure waterjet cutting and abrasive waterjet cutting
            services to anyone with the need.
          </p>
          <p>
            We have the 11 years of experience with CNC waterjet profile cutting
            service in India. We can cut any material up to 400mm thickness. If
            you can draw it, we can water jet it. We mainly serve industries
            such as Defence, Nuclear, Process Instrument, Aerospace, Power,
            Heavy Engineering etc., apart from this, we also serve many other
            industries at small scale. We are running a job shop & L&T HED
            Premises, where customers are always given highest priority.
          </p>
          <p>
            Over the years we have consistently demonstrated that we can be a
            reliable source by delivering products on time with exceptional
            quality. If the product is not right, we will make it right,
            regardless of cost. Our equipment is constantly being upgraded to
            ensure that we are utilizing the latest waterjet Cutting
            advancements the industry has to offer.
          </p>
          <div className="vision-mission about-sections">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center align-items-center icon">
                    <FontAwesomeIcon icon={faLightbulb} size="lg" />
                  </div>
                  <div className="col-10">
                    <h4>Our Vision</h4>
                    <p>
                      Our vision is to become World's biggest waterjet profile
                      cutting House, the one stop solution for all kinds of
                      profile cutting needs with a global perspective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center align-items-center icon">
                    <FontAwesomeIcon icon={faFlag} />
                  </div>
                  <div className="col-10">
                    <h4>Our Mission</h4>
                    <p>
                      To provide the highest level of customer services,
                      satisfaction and quality by utilizing the latest
                      technology for profile cutting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-us about-sections">
            <h3 className="d-flex justify-content-center">Why Us?</h3>
            <div className="why-us-content">
              <div className="row">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                  <figure>
                    <img
                      src={require("../../assets/why-us.jpg")}
                      alt="why-us"
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <ul>
                    <li>
                      We have the 11 years of practical experience in CNC Water
                      Jet Cutting business.
                    </li>
                    <li>
                      We are expertise in any kind of critical work and
                      maintenance work of machine.
                    </li>
                    <li>We believe in Excellent cutting quality work.</li>
                    <li>
                      We have an experience work with Défense project, Heavy
                      Engineering Project, Nuclear Power Plant Project.
                    </li>
                    <li>
                      We realize that this situation is difficult in Water jet
                      Cutting, but rest-assured we will find a solution for you
                      any time.
                    </li>
                    <li>Customer benefit is appreciating for us.</li>
                    <li>
                      We are always active for critical work in water jet
                      cutting.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="our-client about-sections">
            <h3 className="d-flex justify-content-center">Our Client</h3>
            <div className="client-images">
              {clientList.map((client, key) => {
                return (
                  <div id={key} className="single-client-image">
                    <figure>
                      <img
                        src={require("../../assets/clients/" + client + ".png")}
                        alt={client}
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="technology about-sections">
            <h1 className="d-flex justify-content-center">Technology</h1>
            <br />
            <br />
            <h4 className="d-flex justify-content-center">
              Waterjet VS. Other Technologies
            </h4>
            <div className="img-table">
              <div className="">
                <figure>
                  <img src={require("../../assets/chart.jpg")} alt="chart" />
                </figure>
              </div>
              <div className="tech-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Waterjet</th>
                      <th>EDM</th>
                      <th>Laser</th>
                      <th>Plasma</th>
                      <th>Gas Cutting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thickness</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>-</td>
                      <td>+ +</td>
                      <td>+ +</td>
                    </tr>
                    <tr>
                      <td>Diversity</td>
                      <td>+ +</td>
                      <td>-</td>
                      <td>+</td>
                      <td>- -</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Quality - Surface Finished</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>+</td>
                      <td>-</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Saving Finishing Operation</td>
                      <td>+</td>
                      <td>+ +</td>
                      <td>+</td>
                      <td>-</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>-</td>
                      <td>- -</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>+</td>
                    </tr>
                    <tr>
                      <td>Universality</td>
                      <td>+ +</td>
                      <td>- -</td>
                      <td>+</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Environmental Friendliness</td>
                      <td>+ +</td>
                      <td>- -</td>
                      <td>- -</td>
                      <td>- -</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>+ +</td>
                      <td>-</td>
                      <td>+</td>
                      <td>-</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Heat Affected Zone</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>-</td>
                      <td>-</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Metalurgical Damage</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>-</td>
                      <td>- -</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Total Processing Time</td>
                      <td>+ +</td>
                      <td>+ +</td>
                      <td>+</td>
                      <td>-</td>
                      <td>- -</td>
                    </tr>
                    <tr>
                      <td>Operation Cost</td>
                      <td>-</td>
                      <td>+</td>
                      <td>-</td>
                      <td>+</td>
                      <td>+ +</td>
                    </tr>
                    <tr>
                      <td>Investment Cost</td>
                      <td>100%</td>
                      <td>60%</td>
                      <td>200%</td>
                      <td>80%</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h4>Advantages of Waterjet Technology</h4>
            <div>
              <ul>
                <li>Extremely fast transition from drawing to cutting</li>
                <li>
                  Faster setup-low tangential forces often eliminate the need
                  for clamping
                </li>
                <li>High accuracy-eliminates secondary cutting</li>
                <li>Fast cutting speed</li>
                <li>Eliminates the need to sharpen tools</li>
                <li>
                  Safer for operators and the environment-Avoids vapor, dust and
                  smoke and does not require
                </li>
                <li>expensive coolants</li>
                <li>
                  Cold cutting process=eliminates heat-affected zones, hardened
                  material and material stresses
                </li>
                <li>
                  Clean finished product eliminates secondary cleaning
                  operations
                </li>
                <li>
                  Burr=free finish-eliminates any need for secondary surface
                  sinishing for most applications
                </li>
                <li>Small kerfs</li>
                <li>
                  Ideal for quick prototype, flexible production and proven for
                  high volume production
                </li>
                <li>Optimum material utilization with CAD/CAM software</li>
                <li>Customized system solutions</li>
                <li>Projects page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
