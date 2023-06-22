import React from "react";

function BenifitsOfOperation(props) {
  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/covers/infrastructure-header.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="main-content">
        <div className="container">
          <div className="content-title">
            <h1>Benifits Of Operations</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BenifitsOfOperation;
