import React, { useContext, useState } from "react";
import { authContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleRegister,  manageProfile} = useContext(authContext);

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmP = e.target.confirmP.value;

    if(password.length < 6){
      setError("Password should be at least 6 character!")
      return;
    }
    if(password !== confirmP){
      setError("Password didn't match")
      return;
    }
    if(!/[a-z]/.test(password)){
       setError("Password must be contain at least one small letter")
       return;
    }
    if(!/[A-Z]/.test(password)){
       setError("Password must be contain at least one capital letter")
       return;
    }

    console.log(name, photo, email, password, confirmP);

    handleRegister(email, password)
    .then(res => {
      manageProfile(name, photo)
    })
  };

  return (
    <div className="my-12 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
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
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmP"
            className="input input-bordered"
            required
          />

          {
            error && <p className=" text-red-600">{error}</p>
          }

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral">
              Register
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
          <h2 className="font-bold">Already Have an Account ? </h2>
          <Link to="/login" className="font-bold text-red-600">
            Login
          </Link>
        </div>

        </form>

        

      </div>
    </div>
  );
};

export default Register;
