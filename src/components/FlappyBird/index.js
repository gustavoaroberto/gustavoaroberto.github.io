import React from "react";
import Grass from "../Grass";
import Cloud from "../Cloud/index";
import FlappyBirdStyles from "./FlappyBird.styles";

export default function FlappyBird() {
  return (
    <FlappyBirdStyles>
      <div className="floor">
        <div className="floor-top"></div>
      </div>
      <Grass />
      <Cloud height="40px" time="8s" />
      <Cloud height="10px" time="10s" />
      <Cloud height="80px" time="12s" />
    </FlappyBirdStyles>
  );
}
