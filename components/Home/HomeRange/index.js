import React from "react";
import Marquee from "react-fast-marquee";
import Buttons from "../../button";
import { HomeRangeWrapper, MarqueeWrapper } from "./style";
function HomeRange() {
  return (
    <HomeRangeWrapper>
      <MarqueeWrapper>
        <Marquee className="Marquee" gradientColor={false} gradientWidth={0}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </MarqueeWrapper>
      <h1>
        <span className="number">105</span>
        <span className="km">KM</span> TrueRange
      </h1>
      <h1>
        <span className="number">146</span>
        <span className="km">KM</span> Certified Range
      </h1>
      <Buttons title={"See What's new"} />
    </HomeRangeWrapper>
  );
}

export default HomeRange;
