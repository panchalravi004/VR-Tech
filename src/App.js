import React from "react";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import "../node_modules/ ../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import Header from "./Components/Common/Header/header";
import Footer from "./Components/Common/Footer/footer";
import Home from "./Components/home/home";
import Infrastructure from "./Components/infrastructure/infrastructure";
import Contact from "./Components/contactUs/contact/contact";
import Service from "./Components/service/service";
import About from "./Components/about/about";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/infrastructure" element={<Infrastructure />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/*" element={<Navigate to="/"/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
