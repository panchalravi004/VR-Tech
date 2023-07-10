import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import FeatureCard from "../featureCard/FeatureCard";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCogs,
  faHandsHelping,
  faLeaf,
  faMedal,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Home(props) {
  const dataList = [
    {
      title: "Quality Assurance",
      small_description:
        "Our commitment to quality is unwavering. We utilize cutting-edge CNC water jet cutting technology to deliver precise and flawless results, ensuring the highest level of quality for every project.",
      full_description:
        "At VR Technocraft, we understand the importance of precision in CNC water jet cutting. Our commitment to quality excellence drives us to employ state-of-the-art machinery and cutting-edge technology to deliver flawless results for our clients. Whether it's intricate designs, complex shapes, or high-tolerance components, our team of skilled professionals is dedicated to meeting and exceeding the highest standards.",
      icon_class: <FontAwesomeIcon icon={faMedal} />,
    },
    {
      title: "On-Time Solutions",
      small_description:
        "We prioritize your time. Our commitment to timely delivery ensures that your CNC water jet cutting projects are completed within the agreed-upon timeframe, allowing you to stay on schedule and meet your project milestones.",
      full_description:
        "At VR Technocraft, we understand the importance of time in the manufacturing industry. We recognize that delays can have a significant impact on your project's timeline and overall success. That's why we are committed to providing on-time solutions for all your CNC water jet cutting needs.",
      icon_class: <FontAwesomeIcon icon={faClock} />,
    },
    {
      title: "Optimizing Efficiency",
      small_description:
        "We strive to provide cost-effective CNC water jet cutting solutions. Our commitment to optimizing efficiency and minimizing costs ensures that you receive high-quality results at competitive prices, maximizing the value of your investment.",
      full_description:
        "At VR Technocraft, we believe that superior quality doesn't have to come with a hefty price tag. Our commitment to cost-effective solutions drives us to optimize efficiency throughout the CNC water jet cutting process. By leveraging advanced technology, efficient production techniques, and smart resource management, we minimize costs without compromising on quality.",
      icon_class: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      title: "Preserving Nature",
      small_description:
        "Our commitment to environmental sustainability is ingrained in our operations. By utilizing eco-friendly practices and minimizing waste, we strive to reduce our carbon footprint and contribute to a greener future.",
      full_description:
        "At VR Technocraft, we recognize the importance of preserving the environment for future generations. Our commitment to environmental sustainability is deeply rooted in our operations. We employ eco-friendly practices throughout the CNC water jet cutting process, utilizing energy-efficient machinery and sustainable materials whenever possible.",
      icon_class: <FontAwesomeIcon icon={faLeaf} />,
    },
    {
      title: "Tailored Solutions",
      small_description:
        "We are committed to providing customized CNC water jet cutting solutions. Our flexibility allows us to adapt to your specific requirements, ensuring that your projects are executed with precision and accuracy",
      full_description:
        "At VR Technocraft, we understand that each project comes with its own unique requirements. Our commitment to customization and flexibility enables us to tailor our CNC water jet cutting solutions to meet your specific needs. Whether it's a one-off prototype or a large-scale production run, we have the expertise and versatility to accommodate projects of any size and complexity.",
      icon_class: <FontAwesomeIcon icon={faCogs} />,
    },
    {
      title: "Exceptional Service",
      small_description:
        "We're here to help and ensure all your project needs are met successfully, By choosing our services, you can rest assured that your projects are being handled with a focus on sustainability and a dedication to creating a greener future.",
      full_description:
        "At VR Technocraft, we team with our customers toward value-engineering and continuous improvement. As your manufacturing partner, you can rely on us to make meaningful contributions to the benefit of the partnership. Our mission is to delight our customers by meeting or exceeding their requirements and expectations for quality, delivery, and total value.",
      icon_class: <FontAwesomeIcon icon={faHandsHelping} />,
    },
  ];

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      {/* Slide Section Start Here */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide5.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carsousel-title">Precision Cutting Solutions</h3>
            <p className="carsousel-description">
              Flawless and precise CNC Water Jet Services for a wide range of
              materials, delivering unmatched accuracy and quality.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide8.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">Versatile Material Processing</h3>
            <p className="carsousel-description">
              Cutting through steel, aluminum, granite, glass, and more with our
              advanced CNC Water Jet Machines, ensuring clean and intricate
              cuts.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide9.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">Customized Solutions</h3>
            <p className="carsousel-description">
              Tailored CNC Water Jet Solutions that maximize efficiency, reduce
              waste, and save costs, bringing your ideas to life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carsousel-image"
            src={require("../../assets/slideshow/slide10.jpg")}
            alt="Four slide"
          />

          <Carousel.Caption>
            <h3 className="carsousel-title">
              Exceptional Quality and Efficiency
            </h3>
            <p className="carsousel-description">
              State-of-the-art CNC Water Jet Systems delivering exceptional
              precision, faster turnaround times, and consistent results.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Wellcome Section */}
      <div className="container py-3">
        <div className="text-center content">
          <ScrollAnimation animateIn="fadeIn">
          <div className="d-flex justify-content-center">
            <div className="my-2">
              <h1 >VR TECHNOCRAFT</h1>
            </div>
          </div>
          </ScrollAnimation>
          <p className="page-main-header-description my-2">
            Welcome to the world of CNC waterjet profile cutting
          </p>
          <div className="text-center my-4">
            <h5>AN EXTENSION OF YOUR TEAM</h5>
          </div>
        </div>
      </div>
      <hr />

      {/* Services Section */}
      <div className="services py-3">
        <div className="text-center">
          <h2 className="fw-bolder">Our Services</h2>
        </div>
        <div className="container serviceContent my-4">
          <div class="row align-items-center">
            <div className="col-xl-5">
              <ScrollAnimation animateIn="fadeIn">
                <img
                  className="serviceContent-image"
                  src={require("../../assets/others/our-services.jpg")}
                  alt=""
                />
              </ScrollAnimation>
            </div>
            <div className="col-xl-7">
              <ScrollAnimation animateIn="fadeIn">
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
                    We are always active for critical work in water jet cutting.
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <NavLink className="nav-link" to="/about">
          <button className="serviceBtn mt-5">Learn More</button>
        </NavLink>
      </div>

      <hr />

      {/* Showing Feature Card */}
      <div className="container py-4">
        <div className="text-center">
          <h4>WHAT YOU CAN EXPECT</h4>
          <h2 className="fw-bolder">Our Commitment To You</h2>
        </div>
        <div className="py-5">
          <div class="row justify-content-around">
            {dataList.map((item, index) => (
              <FeatureCard data={item} />
            ))}
          </div>
        </div>
      </div>

      <hr />

      {/* Industries */}
      <div className="container py-4">
        <div className="text-center">
          <h4>EXPERTISE TO THE INDUSTRY VERTICALS</h4>
          <h2 className="fw-bolder">Industries We Serve</h2>
        </div>
        <div className="py-5">
          <ScrollAnimation animateIn="fadeIn">
            <div class="row justify-content-around align-items-center">
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-2.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Automotive</h2>
              </div>
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-1.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Defense</h2>
              </div>
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-3.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Architectural</h2>
              </div>
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-5.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Oil & Gas</h2>
              </div>
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-7.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Aerospace</h2>
              </div>
              <div className="industry-card col-lg-4 my-3">
                <img
                  src={require("../../assets/industry/industry-6.jpg")}
                  className="industry-card-image w-100"
                  alt=""
                  srcset=""
                />
                <h2 className="industry-card-title">Renewable Energy</h2>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      
    </React.Fragment>
  );
}

export default Home;
