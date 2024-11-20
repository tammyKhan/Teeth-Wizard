import React from "react";

const ServiceCard = ({ service }) => {
   const {treatment, description, image, cost} = service;

  return (
      
       <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-44 md:h-52"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">
         {treatment}
          <div className="badge badge-neutral">${cost}</div>
        </h2>
        <p className="text-sm">{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <div className="btn badge badge-outline">Checkout More</div>
        </div>
      </div>
    </div>
   
  );
};

export default ServiceCard;
