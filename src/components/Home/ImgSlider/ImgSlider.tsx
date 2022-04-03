import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./ImgSlider.styles";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/home">
          <img src="/images/slider-badging.jpg" alt="slider " />
        </a>
      </Wrap>

      <Wrap>
        <a href="/home">
          <img src="/images/slider-scale.jpg" alt="slider " />
        </a>
      </Wrap>

      <Wrap>
        <a href="/home">
          <img src="/images/slider-badag.jpg" alt="slider " />
        </a>
      </Wrap>

      <Wrap>
        <a href="/home">
          <img src="/images/slider-scales.jpg" alt="slider " />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
