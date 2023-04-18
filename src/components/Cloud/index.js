import React from "react";
import CloudStyles from "./Cloud.styles";

export default function Cloud({ height, time }) {
  return (
    <CloudStyles height={height} time={time}>
      <div></div>
      <div></div>
      <div></div>
    </CloudStyles>
  );
}
