import React from "react";
import {
  Background,
  Container,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
} from "./Detail.styles";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="" alt="" />
      </Background>
      <ImageTitle>
        <img src="" alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
        </Controls>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
