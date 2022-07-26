import styled from "styled-components";

export const HomeRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3e3e3;
  padding: 20px 0px 200px 0px;

  h1 {
    font-size: 50px;
    color: #191919;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .number,
  .km {
    color: #31a93e;
  }
  .km {
    font-size: 12px;
  }
`;
export const MarqueeWrapper = styled.div`
  padding-bottom: 15px;
  .Marquee {
    background: #31a93e;
    height: 40px;
    width: 150px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    border-radius: 3px;
    letter-spacing: 1px;
  }
`;
