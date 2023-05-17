import React from "react";
import {
  TrendingCardContainer,
  Head,
  ListDiv,
  List,
  Song,
  Image
} from "./trending.styles";
import Add from "../../assets/svg/add.svg";
import Button from "../button/button";

const TrendingCard = () => {
  return (
    <TrendingCardContainer>
      <Head>trending songs</Head>
      <ListDiv>
        <List>
          <Song>unavailable by davido</Song>
          <Image src={Add} />
        </List>

        <List>
          <Song>unavailable by davido</Song>
          <Image src={Add} />
        </List>

        <List>
          <Song>unavailable by davido</Song>
          <Image src={Add} />
        </List>

        <List>
          <Song>unavailable by davido</Song>
          <Image src={Add} />
        </List>

        <List>
          <Song>unavailable by davido</Song>
          <Image src={Add} />
        </List>

        <Button style={{ margin: "0 auto" }}>view more</Button>
      </ListDiv>
    </TrendingCardContainer>
  );
};

export default TrendingCard;
