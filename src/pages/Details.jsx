import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const Details = () => {
  const { id, treatment, description, image, cost } = useLoaderData();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
          <p className="mb-5">
           {description}
          </p>
          <button 
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn bg-white text-black font-bold">Book Appointment</button>
        </div>
      </div>
      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default Details;
