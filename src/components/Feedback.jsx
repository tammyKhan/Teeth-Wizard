import React from "react";

const Feedback = ({ feedbackData }) => {
  return (
  <div>
     <h2 className="text-3xl font-bold my-12">What Our Patients Say!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {feedbackData.map((feed) => (
        <div key={feed.reviewId} className="card bg-base-100 shadow-xl">
          <div className="card-body">

            <div className="flex gap-4">
              <img
                className=" w-12 h-12 rounded-full"
                src={feed.userImg}
                alt=""
              />
              <h2 className="card-title">{feed.name}</h2>
            </div>

            <p>{feed.review}</p>

            <div className="card-actions justify-end gap-4 items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Feedback;
