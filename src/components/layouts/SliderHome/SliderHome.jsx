import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id='sliderHome'>
    <Slider {...settings} id='div'>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
    </div>
  );
}

export default SliderHome;
