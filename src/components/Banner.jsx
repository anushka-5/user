
import BannerImg from "../assets/banner-img.png.jpg";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Pastel Bites </h1>
          <p>
           Dreamy colors, Pure Delight
          </p>
          <div className="ctas">
            <div className="read-more">Read More</div>
            <div className="shop-now">Order Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;