import React from "react";
import "./home.css";
import FeatureCard from "../featureCard/FeatureCard";

function Home(props) {
  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/slideshow/slide1.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="main-content">
        <div className="container">
          <div className="content-title">
            <h1>
              <span>VR TECHNOCRAFT</span>
            </h1>
          </div>
          <h2 className="d-flex justify-content-center">
            Welcome to India's biggest job shop for CNC waterjet profile cutting
          </h2>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="serviceHeading">
          <h1>Our Services</h1>
        </div>
        <div className="serviceContent">
          <p>
            Whether you need a design fabricated or even help with your initial
            design, we are here to help! Let us show you how we can become your
            one-stop manufacturing shop. Our shop makes use of the latest
            equipment and software available, along with the tried-and-true
            tools our employees use on every job. Quality, timely completion,
            and the precise execution of your project are the hallmarks of
            Advance Waterjet’s 19 years of service. Feel free to visit us
            anytime at our shop, we’d be happy to show you our capabilities.
          </p>
        </div>
        <button className="serviceBtn">Learn More</button>
      </div>
      <div className="featureSection">
        <p>WHAT YOU CAN EXPECT</p>
        <h2>Our Commitment To You</h2>
        <hr />
        <div className="featureCards">
          <FeatureCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
