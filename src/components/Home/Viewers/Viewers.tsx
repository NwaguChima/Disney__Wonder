import { Container, Wrap } from "./Viewers.styles";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney_images" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" typeof="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney_images" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" typeof="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney_images" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" typeof="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney_images" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" typeof="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney_images" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            typeof="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;
