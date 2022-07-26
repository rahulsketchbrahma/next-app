import styled from "styled-components";

export const PerfomanceWrapper = styled.div`
  background-color: #e3e3e3;
  padding-bottom: 130px;
`;
export const PerfomanceContainer = styled.div`
  h1,
  h2 {
    font-size: 52px;
    font-weight: 400;
  }
  span {
    color: #9c9e9f;
  }
  h2 {
    padding-bottom: 40px;
  }

  @media only screen and (min-width: 1230px) {
    max-width: 1220px;
    padding: 0;
    margin: auto;
  }
`;

export const PerfomanceRange = styled.div`
  display: flex;
  background-color: white;
  padding: 20px 30px;
  gap: 60px;
`;
export const RangeWrapper = styled.div``;
export const ImageWrapper = styled.div`
  padding-bottom: 40px;
  img {
    width: 100%;
  }
`;
