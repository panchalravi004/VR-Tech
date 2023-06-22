import React, { useState } from "react";
import "./featureCard.css";
function FeatureCard() {
  const [showDetail, setShowDetail] = useState(false);
  const showContent = () => {
    setTimeout(() => {
      setShowDetail(true);
    }, 400);
  };
  const removeContent = () => {
    // setTimeout(() => {
    setShowDetail(false);
    // }, 400);
  };
  return (
    <React.Fragment>
      <div
        id="mainCard"
        onMouseEnter={showContent}
        onMouseLeave={removeContent}
      >
        {!showDetail ? (
          <>
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>
              <div className="cardIcon">qq</div>
              <div class="cardHeading">qwqwq qwqwqw</div>
              <div class="cardContent">
                lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor
                sitlorem
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="cardContentBack">
              lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor
              sitloremlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum
              dolor sitloremlorem ipsum dolor sitlorem ipsum dolor sitlorem
              ipsum dolor sitloremlorem ipsum dolor sitlorem ipsum dolor
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default FeatureCard;

{
  /* <div className="cardIcon">qq</div>
            <div className="cardHeading">qwqwq qwqwqw</div>
            <div className="cardContent">
              lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor
              sitlorem
            </div> */
}
