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
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <footer>
      <div className="footer-up m-0">
        <div className="container-fluied">
          <div className="row m-0">
            <div className="col-lg-5 col-sm-12 p-5">
              <div className="companyName col-12">
                <h2 className="m-2">VR TECHNOCRAFT</h2>
              </div>
              <div className="address mt-5">
                <div className="row m-0 mb-2">
                  <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                    <FontAwesomeIcon className="add-icon" icon={faLocationDot} />
                  </div>
                  <div className="col-11 p-0">
                    <p className="address-text">
                      L&T Heavy Engineering (In house Facility) LEMF-5, Nuclear
                      West Shop, Hazira Surat.
                    </p>
                  </div>
                </div>

                  <div className="row m-0 mb-2">
                    <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                      <FontAwesomeIcon
                        className="add-icon"
                        icon={faLocationDot}
                      />
                  </div>
                  <div className="col-11 p-0 ">
                    <p className="address-text">
                      C-1/17, Hojiwala Industrial Estate, Road No.8, Gate No. 1, Sachin,
                      Surat, Gujarat, India-394230.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="contactNo">
                <div className="row m-0 mb-2 t">
                  <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                    <FontAwesomeIcon 
                    className="add-icon"
                    icon={faPhone} />
                  </div>
                  <div className="col-11 p-0">
                    <a className="nav-link" href="tel:+919898519815">
                      +91&nbsp;98985&nbsp;19815
                    </a>
                  </div>
                </div>
              </div>
              <div className="email">
                <div className="row m-0 mb-5 t">
                  <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                    <FontAwesomeIcon 
                    className="add-icon"
                    icon={faEnvelope} />
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
            <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-down  m-0">
        <div className="container-fluied">
          <p>Copyright © 2023 VR Technocraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
