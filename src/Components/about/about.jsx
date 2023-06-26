
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./about.css";
import ScrollAnimation from 'react-animate-on-scroll';



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
    "devrekha-india",
    "alstom",
  ];

  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/slideshow/slide7.jpg")}
          alt="infrastructure-header"></img>
         <div className="page-image-header-title">
          <h2 >About of VR Technocraft</h2>
        </div>
      </figure>

      <div className="container">
        <div className="container d-flex justify-content-center">
          
        </div>
        <p className="about-detail">
          VR TECHNOCRAFT is House of waterjet Profile Cutting services in the
          Surat, Gujarat, India. In the early years, we could not find anyone
          that would cut their products with the quality level and timeliness
          that they required. As a result, a new business waterjet cutting was
          born. We provide pure waterjet cutting and abrasive waterjet cutting
          services to anyone with the need.
        </p>
        <p className="about-detail">
          We have the 11 years of experience with CNC waterjet profile cutting
          service in India. We can cut any material up to 400mm thickness. If
          you can draw it, we can water jet it. We mainly serve industries
          such as Defence, Nuclear, Process Instrument, Aerospace, Power,
          Heavy Engineering etc., apart from this, we also serve many other
          industries at small scale. We are running a job shop & L&T HED
          Premises, where customers are always given highest priority.
        </p>
        <p className="about-detail">
          Over the years we have consistently demonstrated that we can be a
          reliable source by delivering products on time with exceptional
          quality. If the product is not right, we will make it right,
          regardless of cost. Our equipment is constantly being upgraded to
          ensure that we are utilizing the latest waterjet Cutting
          advancements the industry has to offer.
        </p>
        <div className="vision-mission about-sections">
          <div className="row justify-content-around p-2">
            <div className="col-lg-5 col-sm-12 m-2 about-section-card">
              <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center icon" >
                  {/* <FontAwesomeIcon icon={faLightbulb} size="lg" /> */}
                  <FontAwesomeIcon icon={faEye} style={{marginRight:"5px"}}/>
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
            <div className="col-lg-5 col-sm-12 m-2 about-section-card">
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

        {/* Client */}
        <div className="our-client about-sections">
          <div className="d-flex justify-content-center">

          <h2 className="our-client-title">OUR CLIENT</h2>
          </div>
          <div className="client-images">
            {clientList.map((client, key) => {
              return (
                <div id={key} className="single-client-image">
                  <ScrollAnimation animateIn="fadeIn">
                    <figure>
                      <img
                        src={require("../../assets/clients/" + client + ".png")}
                        alt={client}
                      />
                    </figure>
                  </ScrollAnimation>
                </div>
              );
            })}
          </div>
        </div>
        {/* Technology */}
        <div className="technology about-sections">
          
          <div className="d-flex justify-content-center my-5">
            <h2 className="technology-title">Advantages of Waterjet Technology</h2>
          </div>
          <div className="advantages">
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
    </React.Fragment>
  );
}

export default About;
