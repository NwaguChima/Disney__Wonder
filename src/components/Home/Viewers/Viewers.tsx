import React from "react";
import { Container, Wrap } from "./Viewers.styles";

const Viewers = (props: any) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney_images" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney_images" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney_images" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney_images" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney_images" />
      </Wrap>
    </Container>
  );
};

export default Viewers;
