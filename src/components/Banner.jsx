import React from "react"
import bannerImg from "../assets/dentists-treat-patients-teeth.jpg"

const Banner = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="lg:w-5/12 h-80 shadow-2xl rounded-xl"
          src={bannerImg}
        />
        <div>
          <h1 className="text-4xl font-bold">"Your Smile, Our Priority!" 😊</h1>
          <p className="py-6">
          Experience exceptional dental care in a friendly and comfortable environment. From routine checkups to advanced treatments, we’re here to help you achieve the smile you deserve!
          </p>
          <button className="btn btn-neutral rounded-none">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
