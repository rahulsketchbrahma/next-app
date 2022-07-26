import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 0px 20px;

  @media only screen and (min-width: 1230px) {
    max-width: 920px;
    padding: 0;
    margin: auto;
  }
  p {
    margin: 80px 0px 100px 0px;
    text-align: center;
    font-size: 13px;
    letter-spacing: 0.5px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0px 0px 0px;
`;

export const FooterMenus = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 13px;
    font-weight: 600;
    padding-bottom: 18px;
  }
  a {
    padding: 15px 0px;
    font-size: 14px;
    font-weight: 500;
    color: gray;
  }
`;
