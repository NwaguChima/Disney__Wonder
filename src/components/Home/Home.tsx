import React from "react";
import { Container } from "./Home.styles";
import ImgSlider from "./ImgSlider/ImgSlider";
import Viewers from "./Viewers/Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

export default Home;
