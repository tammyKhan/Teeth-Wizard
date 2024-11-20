import React from "react";

const Modal = () => {

const handleSubmit = (e) =>{
  e.preventDefault()
  

}

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              {/* <div className="form-control"> */}
                <input
                  type="text"
                  placeholder="First Name"
                  name="Fname"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="Lname"
                  className="input input-bordered"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  className="input input-bordered"
                  required
                />
                <input
                  type="date"
                  placeholder="Appointment Date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              {/* </div> */}
              {/* <div className="form-control"> */}
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered"
                  required
                />
              
              {/* </div> */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-neutral">Make Appointment</button>
              </div>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
