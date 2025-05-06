const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>SHOP NOW</button>
          <button className="secondary-btn">CATEGORY</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="shopping-sites">
            <img src="../../public/images/flipkart.png" alt="" />
            <img src="../../public/images/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="../../public/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
};
export default Hero;
