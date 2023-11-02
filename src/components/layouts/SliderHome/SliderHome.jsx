import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//imgs import
import ShoesImg from '../../../../public/assets/product/shoes/jordanBlack.png';
import DressBagsImg from '../../../../public/assets/product/dressBags/nikeRed.png';
import ShirtsImg from '../../../../public/assets/product/shirts/gucciBlack.png';

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
        <img className='imgSliderHome' src={ShoesImg} alt="" />
      </div>
      <div>
        <img className='imgSliderHome' src={DressBagsImg} alt="" />
      </div>
      <div>
        <img className='imgSliderHome' src={ShirtsImg} alt="" />
      </div>
    </Slider>
    </div>
  );
}

export default SliderHome;
