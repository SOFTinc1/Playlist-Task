import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 20px 0;
`;
export const Inner = styled.div`
  display: flex;
  // align-items: center;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
export const InnerDetails = styled.div`
  margin-top: 60px;

  @media screen and (max-width: 830px) {
    text-align: center;
    margin-top: 10px;
  }
`;
export const Title = styled.h1`
  font-family: euclid;
  font-size: 66px;
`;
export const Details = styled.p`
  font-family: typo;
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    font-size: 22px;
  }
`;
export const ButtonInner = styled.div`
  @media screen and (max-width: 830px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 40px 0;
  }
`;
export const CardDiv = styled.div`
  margin-left: auto;
`;
