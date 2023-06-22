import {
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./featureCard.css";

function FeatureCard() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  
  return (
    <React.Fragment>
      <div 
      className='col-4 m-4 main-card'
      >
        {/* {`main-card-inner ${isFlipped ? 'flipped' : ''}`} */}
        <div class='main-card-inner'>
          
            <div className="card-front">
              <div className="card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="card-title">
                Eceptional Service
              </h3>
              <h6 className="card-description">
                  &nbsp;&nbsp;&nbsp;We team with our customers toward value engineering and continuous improvement
              </h6>
            </div>

            <div className="card-back">
              <h6 className="card-description">
                this is back We team with our customers toward value engineering and continuous improvement
              </h6>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeatureCard;
