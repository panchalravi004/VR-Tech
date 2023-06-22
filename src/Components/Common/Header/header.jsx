import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header(props) {
  return (
    <React.Fragment>
      {/* <div className="uppper-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="nav-link" href="tel:+919898519815">
                <FontAwesomeIcon icon={faPhone} /> &nbsp;
                +91&nbsp;98985&nbsp;19815
              </a>
            </div>
            <div className="col d-flex justify-content-end">
              <a className="nav-link" href="mailto:vr.technocraft@yahoo.com">
                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                vr.technocraft@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="lower-header">
        <div className="container">
          <div className="lower-header-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="nav-link navbar-brand" to="/">
                VR TECHNOCRAFT
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto nav-ul-li">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      ABOUT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/infrastructure">
                      INFRASTRUCTURE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      SERVICE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/benifitsofoperation">
                      BENEFITS OF OPERATION
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cuttingprocess">
                      CUTTING PROCESS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      CONTACT
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      WE CATER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PROJECTS
                    </a>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
