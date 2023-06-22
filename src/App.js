import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/ ../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import About from "./Components/about/about";
import BenifitsOfOperation from "./Components/benifitsofoperation/benifitsofoperation";
import Footer from "./Components/Common/Footer/footer";
import Header from "./Components/Common/Header/header";
import CuttingProcess from "./Components/cuttingProcess/cuttingProcess";
import Home from "./Components/home/home";
import Infrastructure from "./Components/infrastructure/infrastructure";
import Service from "./Components/service/service";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route
          exact
          path="/infrastructure"
          element={<Infrastructure />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact
          path="/benifitsofoperation"
          element={<BenifitsOfOperation />}
        ></Route>
        <Route
          exact
          path="/cuttingprocess"
          element={<CuttingProcess />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
