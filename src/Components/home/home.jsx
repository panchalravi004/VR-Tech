import React, { useEffect, useState } from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import FeatureCard from "../featureCard/FeatureCard";

function Home(props) {

  return (
    <React.Fragment>
      {/* Slide Section Start Here */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carsousel-title">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide4.jpg")}
            alt="Four slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">Four slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Show Client List View */}
      <div className="container py-5">
        <div class="brands">
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/alstom.png")} alt="" />
            </a>
          </span>
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/devrekha-india.png")} alt="" />
            </a>
          </span>
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/isgec-hitachi-zosen-limited.png")} alt="" />
            </a>
          </span>
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/gea.png")} alt="" />
            </a>
          </span>
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/global-wind-power.png")} alt="" />
            </a>
          </span>
          <span class="brands__item">
            <a href="#">
              <img src={require("../../assets/clients/isgec-titan.png")} alt="" />
            </a>
          </span>
        </div>
      </div>

      <hr />

      {/* Wellcome Section */}
      <div className="container py-3">
        <div className="text-center content">
          <h1 className="content-title my-2" >VR TECHNOCRAFT</h1>
          <p className="content-description my-2">
            Welcome to India's biggest job shop for CNC waterjet profile cutting
          </p>
        </div>
      </div>
      <hr />

      {/* Services Section */}
      <div className="services py-5">
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

      <hr />

      {/* Showing Feature Card */}
      <div className="container py-4">
        <div className="feature-section-head text-center">
            <h4>WHAT YOU CAN EXPECT</h4>
            <h2 className="fw-bolder">Our Commitment To You</h2>
        </div>
        <div className="feature-section-body py-5">
            <div class="row justify-content-around" >
              
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
