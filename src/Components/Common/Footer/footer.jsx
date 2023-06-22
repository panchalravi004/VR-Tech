import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
import GoogleMapReact from "google-map-react";

function Footer(props) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <footer>
      <div className="footer-up">
        <div className="container">
          <div className="row">
            <div className="companyName col-12">
              <h1>VR TECHNOCRAFT</h1>
            </div>
            <div className="mb-3 col-lg-5 col-lg-5 col-sm-12">
              <div className="address">
                <div className="row m-0">
                  <div className="col-1 p-0">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="col-11 p-0">
                    <p>
                      L&T Heavy Engineering (In house Facility) LEMF-5, Nuclear
                      West Shop, Hazira Surat.
                    </p>
                  </div>
                </div>

                <div className="row m-0">
                  <div className="col-1 p-0">
                    <FontAwesomeIcon
                      className="locationfa"
                      icon={faLocationDot}
                    />
                  </div>
                  <div className="col-11 p-0">
                    <p>
                      D-9/13, Hojiwala Industrial Area, Road No.2,
                      Sachin-Palsana Road, Surat, Gujarat-394230.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contactNo">
                <div className="row m-0">
                  <div className="col-1 p-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="col-11 p-0">
                    <a className="nav-link" href="tel:+919898519815">
                      +91&nbsp;98985&nbsp;19815
                    </a>
                  </div>
                </div>
              </div>
              <div className="email">
                <div className="row m-0">
                  <div className="col-1 p-0">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="col-11 p-0">
                    <a
                      className="nav-link"
                      href="mailto:vr.technocraft@yahoo.com"
                    >
                      vr.technocraft@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-lg-7 col-sm-12">
              <div className="map-container">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="container">
          <p>Copyright © 2023 VR Technocraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
