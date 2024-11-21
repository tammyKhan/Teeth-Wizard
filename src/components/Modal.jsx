import React, { useContext } from "react";
import { authContext } from "./AuthProvider";

const Modal = ({treatment}) => {

  const {user} = useContext(authContext)

const handleSubmit = (e) =>{
  e.preventDefault()
  
  const fname = e.target.fname.value
  const lname = e.target.lname.value
  const email = e.target.email.value
  const phone = e.target.phone.value
  const date = e.target.date.value
  const address = e.target.address.value

  const info = {
    fname, lname, email, phone, date, address, treatment
  }

  let saveData = []
  const localData = localStorage.getItem("appointments");
  if(localData){
    saveData = JSON.parse(localData)
  }
  saveData.push(info);
  localStorage.setItem("appointments", JSON.stringify(saveData))

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
                  name="fname"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  className="input input-bordered"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  value={user?.email}
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
