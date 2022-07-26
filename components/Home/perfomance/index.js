import React from "react";
import {
  PerfomanceWrapper,
  PerfomanceContainer,
  PerfomanceRange,
  RangeWrapper,
  ImageWrapper,
} from "./style";
import Buttons from "../../button";
function Perfomance() {
  return (
    <PerfomanceWrapper>
      <PerfomanceContainer>
        <h1>
          0 to <span>wheeeee</span>
        </h1>
        <h2>in 3.3sec</h2>
        <PerfomanceRange>
          <RangeWrapper>
            <h3>TrueRange</h3>
            <h4>105KM</h4>
          </RangeWrapper>
          <RangeWrapper>
            <h3>TrueRange</h3>
            <h4>105KM</h4>
          </RangeWrapper>
          <RangeWrapper>
            <h3>TrueRange</h3>
            <h4>105KM</h4>
          </RangeWrapper>
        </PerfomanceRange>
        <ImageWrapper>
          <img src="https://www.atherenergy.com/images/450x-new/breeze-streets/performance_desk.webp" />
        </ImageWrapper>
        <Buttons title={"All about performance"} />
      </PerfomanceContainer>
    </PerfomanceWrapper>
  );
}

export default Perfomance;
