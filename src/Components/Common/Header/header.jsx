import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header(props) {
  return (
    <React.Fragment>
      <div className="lower-header">
        <div className="container">
          <div className="lower-header-content">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
              <NavLink className="navbar-brand" to="/">
                VR TECHNOCRAFT
              </NavLink>
              <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavbar}>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse justify-content-end" id="navbarColor01">
                <ul className="navbar-nav mr-auto nav-ul-li">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/infrastructure">
                      INFRASTRUCTURE
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
                    <NavLink className="nav-link" to="/service">
                      SERVICE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      CONTACT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      ABOUT
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

function handleNavbar() {
  
  var a = document.getElementById('navbarColor01');
  if (a.classList.contains('show')) {
    
    a.classList.remove('show');
  }else{
    a.classList.add('show');
  }

}

export default Header;
