import React from "react";
import "./service.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from "react";

function Service(props) {
  
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/covers/service.jpg")}
          alt="service-header"
        ></img>
        <div className="page-image-header-title">
          <h2 >Water Jet</h2>
        </div>
      </figure>
      <div className="container-fluid p-0">

        {/* What is water jet cutting */}
        <div className="section-one">
          <div className="d-flex justify-content-center">
            <div className="page-main-header my-2">
              <h2>What is Water Jet cutting ?</h2>
            </div>
          </div>

          <div className="container p-2 my-5">
            <div class="row align-items-center">
              <div className="col-lg-5 page-detail-image">
                <figure>
                  <img
                    src={require("../../assets/slideshow/slide11.jpg")}
                    alt="What is waterjet cutting ?"
                  />
                </figure>
              </div>
              <div className="col-lg-7">
                <p className="page-header-detail">
                    Water jet cutting is a versatile and precise cutting process used in various industries to cut and shape different types of materials. 
                    It involves the use of a high-pressure stream of water, often mixed with abrasive particles, 
                    to cut through materials with precision and accuracy.
                </p>
                <p className="page-header-detail">
                  The water jet cutting system typically consists of a high-pressure pump that pressurizes water to extremely high levels, usually ranging from 30,000 to 90,000 pounds per square inch (psi). 
                  The pressurized water is then directed through a specialized cutting nozzle that focuses the stream into a concentrated jet.
                </p>
              </div>
            </div>
            
            <p className="page-header-detail">
              In pure water jet cutting, the high-pressure water stream is used to cut softer materials like foam, rubber, plastics, and even food products. 
              However, for harder and tougher materials such as metals, stone, glass, or ceramics, abrasive particles such as garnet or aluminum oxide are mixed with the water to enhance the cutting power. 
              This technique is known as abrasive water jet cutting.
            </p>
          </div>
        </div>

        {/* Benifit */}
        <div className="section-two">

          <div className="container d-flex justify-content-center">
            <div className="page-main-header my-2">
              <h2>
               Benefits of Operations
              </h2>
            </div>
          </div>
          <div className="container p-2 my-5">
            <div class="row align-items-center">
              <div className="col-lg-7">
                <p className="page-header-detail">
                  An important benefit of the water jet is the ability to cut material without interfering with its inherent
                  structure, as there is no heat-affected zone (HAZ). Minimizing the effects of heat allows metals to be
                  cut without harming or changing intrinsic properties. Sharp corners, bevels, pierce holes, and shapes
                  with minimal inner radii are all possible.<br/><br/>

                  Water jet cutters are also capable of producing intricate cuts in material. With specialized software and
                  3-D machining heads, complex shapes can be produced.<br/><br/>

                </p>
              </div>
              <div className="col-lg-5 page-detail-image">
                <figure>
                  <img
                    src={require("../../assets/work/work-7.jpg")}
                    alt="benifit of operations"
                  />
                </figure>
              </div>
              <p className="page-header-detail p-2">
                  The kerf, or width, of the cut can be adjusted by swapping parts in the nozzle, as well as changing the
                  type and size of abrasive. Typical abrasive cuts have a kerf in the range of 0.04 to 0.05 in (1.0–1.3 mm),
                  but can be as narrow as 0.02 inches (0.51 mm). Non-abrasive cuts are normally 0.007 to 0.013 in (0.18–
                  0.33 mm), but can be as small as 0.003 inches (0.076 mm), which is approximately that of a human
                  hair. These small jets can permit small details in a wide range of applications.<br/><br/>
              </p>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-5 page-detail-image">
                <figure>
                  <img
                    src={require("../../assets/work/work-5.jpg")}
                    alt="benifit of operations "
                  />
                </figure>
              </div>
              <div class="col-lg-7">
                <p className="page-header-detail">
                
                  Water jets are capable of attaining accuracy down to 0.005 inches (0.13 mm) and repeatability down to
                  0.001 inches (0.025 mm).<br/><br/>

                  Due to its relatively narrow kerf, water jet cutting can reduce the amount of scrap material produced,
                  by allowing uncut parts to be nested more closely together than traditional cutting methods. Water
                  jets use approximately 0.5 to 1 US gal (1.9–3.8 l) per minute (depending on the cutting head's orifice
                  size), and the water can be recycled using a closed-loop system. Waste water usually is clean enough to
                  filter and dispose of down a drain. <br/><br/>
                </p>
              </div>
                <p className="page-header-detail p-2">
                  The garnet abrasive is a non-toxic material that can be mostly
                  recycled for repeated use; otherwise, it can usually be disposed in a landfill. Water jets also produce
                  fewer airborne dust particles, smoke, fumes, and contaminants, reducing operator exposure to
                  hazardous materials. <br/><br/>

                  Metal cutting using waterjet technology eliminates the risk of cross contamination since the contact
                  medium is discarded. 
                </p>
            </div>
          </div>
        </div>

        {/* New Service Section is here */}
        <div className="section-three container">
          <div className="container d-flex justify-content-center">
              <div className="page-main-header my-2">
                <h2>Services By VR Technocraft</h2>
              </div>
          </div>
          <div className="service-section">
            <div className="d-flex justify-content-center">
              <h2 className="page-sub-header">ABRASIVE WATERJET CUTTING</h2>
            </div>
            {/* Gallery Images */}
            <div className="gallery row">
              
                <div className="gallery__column col-lg-3 col-6">
                <div className="gallery__link" rel="noopener noreferrer">
                  <figure className="gallery__thumb">
                    <img src={require("../../assets/service_image/vr5.webp")}alt="Portrait by Ivana Cajina" className="gallery__image"/>
            
                  </figure>
                </div>
                </div>

                <div className="gallery__column col-lg-3 col-6">
                <div className="gallery__link" rel="noopener noreferrer">
                  <figure className="gallery__thumb">
                    <img src={require("../../assets/service_image/vr6.webp")} alt="Portrait by Sam Burriss" className="gallery__image"/>
            
                  </figure>
                </div>
                </div>

                <div className="gallery__column col-lg-3 col-6">
                  <div className="gallery__link" rel="noopener noreferrer">
                      <figure className="gallery__thumb">
                        <img src={require("../../assets/service_image/vr7.png")} alt="Portrait by Jessica Felicio" className="gallery__image"/>
                
                      </figure>
                  </div>
              </div>
              <div className="gallery__column col-lg-3 col-6">
                  <div className="gallery__link" rel="noopener noreferrer">
                      <figure className="gallery__thumb">
                        <img src={require("../../assets/service_image/vr8.png")} alt="Portrait by Jessica Felicio" className="gallery__image"/>
                
                      </figure>
                  </div>
              </div>
                
            </div>

            <ScrollAnimation animateIn="fadeIn">
              <div className="row align-items-center my-5">
                
                <div className="col-lg-5 order-lg-2 page-detail-image">
                  <figure>
                    <img
                      src={require("../../assets/abrasive-waterjet-cutting.jpg")}
                      alt="abrasive-waterjet-cutting"
                    />
                  </figure>
                </div>
                <div className="col-lg-6 order-lg-1"
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
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="row align-items-center my-5 ">
                <div className="col-lg-5 page-detail-image">
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
              <h2 className="page-sub-header">PURE WATERJET CUTTING</h2>
            </div>
            <br />
            <ScrollAnimation animateIn="fadeIn">
              <div className="row align-items-center my-4">
              <div className="col-lg-5 order-lg-2 page-detail-image">
                  <figure>
                    <img
                      src={require("../../assets/slideshow/slide15.jpg")}
                      alt="pure-waterjet-cutting"
                    />
                  </figure>
                </div>
                <div className="col-lg-6 order-lg-1"
                  style={{ textAlign: "justify", marginRight: "10px" }}
                >
                  <p >
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
                
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="row align-items-center my-4 ">
                <div className="col-lg-5 page-detail-image">
                  <figure>
                    <img
                      src={require("../../assets/slideshow/slide16.jpg")}
                      alt="pure-waterjet-cutting"
                    />
                  </figure>
                </div>
                <div
                  className="col-lg-6 "
                  style={{ textAlign: "justify", marginRight: "10px" }}
                >
                  <p >
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

      </div>

     

	
    </React.Fragment>
  );
}

export default Service;
