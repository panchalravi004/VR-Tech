import React from 'react';
import "./contact.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact(props) {
 
  return (
    <>
      
      <div className='contactHead'>
        <div className='row contactinner'>
          <div className='col-12'style={{fontSize:"15px",fontFamily:"unset"}}>
            <span style={{fontSize:"40px",fontFamily:"cursive",height:"auto"}}>Let's work together.</span><br/><br/>
            We strive to provide the best possible service with every contact! You won't be hit with a ridiculously long phone menu when you call us and your email won't disappear into the inbox abyss, never to be seen or heard from again.
            </div>
        </div>
       <img
          src={require("../../../assets/slideshow/slide9.jpg")}
          alt="infrastructure-header"
          width="100%"
          height="400px"></img>

      </div>

      <div className="container d-flex justify-content-center">
        <div className="contact-content-title my-5">
          <h2>
            Contact Us
          </h2>
        </div>
      </div>

      

      <div className="container">
          <div className="contact__wrapper" >
              <div className="container-fluied row no-gutters">
                  <div className="col-lg-5 contact-info__wrapper gradient-brand-color order-lg-2">
                      <div className="row p-3">
                        <div className="companyName col-12 pt-3">
                          <h2 style={{fontFamily:"sans-serif",color:"white"}}>VR TECHNOCRAFT</h2>
                        </div>
                        <div className="col-lg-12 col-sm-12 ">
                          <div className="address mt-5">
                              <div className="col-12 p-0"><h4><b>Unit 1</b></h4></div>
                            <div className="row m-0 mb-2 t1">
                              <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                                <FontAwesomeIcon icon={faLocationDot} style={{color:"#EE5B40"}}/>
                              </div>
                              <div className="col-11 pl-3">
                                <p>
                                L&T Heavy Engineering (In house Facility)
                                LEMF-5, Nuclear West Shop, Hazira Surat.
                                </p>
                              </div>
                            </div>

                              <div className="col-12 p-0"><h4><b>Unit 2</b></h4></div>
                              <div className="row m-0 mb-2 t1">
                                <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                                  <FontAwesomeIcon
                                    className="locationfa"
                                    icon={faLocationDot}
                                    style={{color:"#EE5B40"}}
                                  />
                              </div>
                              <div className="col-11 pl-3 ">
                                <p>
                                C-1/17, Hojiwala Industrial Estate, Road No.8, Gate No. 1, Sachin,
                                Surat, Gujarat, India-394230.  
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="contactNo">
                            <div className="row m-0 mb-2 t1">
                              <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                                <FontAwesomeIcon icon={faUser} style={{color:"#EE5B40"}}/>
                              </div>
                              <div className="col-11 pl-3">
                                <a className="nav-link" href="tel:+919898519815">
                                 ASHISH R. RAMANI
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="contactNo">
                            <div className="row m-0 mb-2 t1">
                              <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                                <FontAwesomeIcon icon={faPhone} style={{color:"#EE5B40"}} />
                              </div>
                              <div className="col-11 pl-3">
                                <a className="nav-link" href="tel:+919898519815">
                                  +91&nbsp;98985&nbsp;19815
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="email">
                            <div className="row m-0 mb-5 t1">
                              <div className="col-1 pl-2" style={{fontSize:'20px'}}>
                                <FontAwesomeIcon icon={faEnvelope} style={{color:"#EE5B40"}} />
                              </div>
                              <div className="col-11 pl-3">
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
                      </div>
                    
                  </div>
          
                  <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                      <form action="#" className="contact-form form-validate pt-5" novalidate="novalidate">
                          <div className="row pt-5">
                              <div className="col-sm-6 mb-3">
                                  <div className="form-group">
                                      <label className="required-field" for="firstName">First Name</label>
                                      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Pavan"/>
                                  </div>
                              </div>
          
                              <div className="col-sm-6 mb-3">
                                  <div className="form-group">
                                      <label for="lastName">Last Name</label>
                                      <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Savani"/>
                                  </div>
                              </div>
          
                              <div className="col-sm-6 mb-3">
                                  <div className="form-group">
                                      <label className="required-field" for="email">Email</label>
                                      <input type="text" className="form-control" id="email" name="email" placeholder="pavansavani@gmail.com"/>
                                  </div>
                              </div>
          
                              <div className="col-sm-6 mb-3">
                                  <div className="form-group">
                                      <label for="phone">Phone Number</label>
                                      <input type="tel" className="form-control" id="phone" name="phone" placeholder="+919334556754"/>
                                  </div>
                              </div>
          
                              <div className="col-sm-12 mb-3">
                                  <div className="form-group">
                                      <label className="required-field" for="message">How can we help?</label>
                                      <textarea className="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                                  </div>
                              </div>
          
                              <div className="col-sm-12 mb-3">
                                  <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                              </div>
          
                          </div>
                      </form>
                  </div>
          
              </div>
          </div>
      </div>
    </>
  );
}

export default Contact;