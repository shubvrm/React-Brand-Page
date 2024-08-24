import amazon from "../images/amazon.png";
import flipkart from "../images/flipkart.png";
import shoe from "../images/shoe3.jpeg";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          YOUR FEET <br />
          DESERVE THE <br />
          BEST
        </h1>
        {/* <br /> */}
        <p>
          Your feet deserve the best and we're here to help you with
          <br /> our shoes. Your feet deserve the best and we're here to <br />
          help you with our shoes. Your feet deserve the best and <br /> we're
          here to help you with our shoes.
        </p>
        {/* <br /> */}
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        {/* <br /> */}
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="amazon" />
            <img src={flipkart} alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
