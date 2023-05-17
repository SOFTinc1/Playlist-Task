import React from "react";
import {
  BannerContainer,
  Inner,
  InnerDetails,
  Title,
  Details,
  ButtonInner,
  CardDiv,
} from "./banner.styles";
import TrendingCard from "../trending/trending";
import Button from "../button/button";

const Banner = () => {
  return (
    <BannerContainer>
      <Inner>
        <InnerDetails>
          <Title>Make your party fun!</Title>
          <Details>create your own custom playlist today,</Details>
          <ButtonInner>
          <Button>create playlist</Button>
          </ButtonInner>
        </InnerDetails>
        <CardDiv>
          <TrendingCard />
        </CardDiv>
      </Inner>
    </BannerContainer>
  );
};

export default Banner;
