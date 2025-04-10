
import BannerImg from "../assets/banner-img.png.jpg";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Pink Panther Yummy Tummy</h1>
          <p>
            Welcome to Pink Panther Yummy Tummy, where flavors come alive! We
            serve delicious, freshly made dishes crafted with love and the
            finest ingredients. Experience the perfect blend of taste and
            quality in every bite.
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