import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", visibility: 'hidden', width : '50px', height : '50px' , textAlign : 'center', background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{visibility: 'hidden' , display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="">
          <img
            src="https://routine.vn/media/catalog/category/Artboard_1_2.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://routine.vn/media/catalog/category/Artboard_1_copy_9.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://routine.vn/media/catalog/category/GIF_-_1920x450px_1.gif"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://routine.vn/media/catalog/category/OUTLET-_WEBSITE_1920X450.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
