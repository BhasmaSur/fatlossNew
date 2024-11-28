import React from "react";
import "./equalGrid.css";
import parse from "html-react-parser";
const EqualGrid = ({
  firstHeading,
  firstContent,
  secondHeading,
  secondContent,
}) => {
  return (
    <div class="grid-container">
      <div class="grid-item">
        <p>
          <h1
            className="cs_hero_title cs_fs_94"
            style={{
              color: "#0984e3",
              fontSize: 20,
            }}
          >
            {parse(firstHeading)}
          </h1>
          {firstContent}
        </p>
      </div>
      <div class="grid-item">
        <p>
          <h1
            className="cs_hero_title cs_fs_94"
            style={{
              color: "#0984e3",
              fontSize: 20,
            }}
          >
            {parse(secondHeading)}
          </h1>
          {secondContent}
        </p>
      </div>
    </div>
  );
};

export default EqualGrid;
