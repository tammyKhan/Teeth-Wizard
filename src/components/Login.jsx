import React, { useContext, useState } from "react";
import { authContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="my-12 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
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

          {error && <p className=" text-red-600">{error.split("/")[1]}</p>}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral">
              Login
            </button>
          </div>

          <div className="form-control mt-6">
            <button onClick={handleGoogleLogin} className="btn ">
              Login With Google
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <h2 className="font-bold">Don't Have an Account ? </h2>
            <Link to="/register" className="font-bold text-red-600">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className='flex gap-3 my-12'>
        <h2 className='font-bold'></h2>
        <Link to="/register" className='font-bold text-red-600'></Link>
      </div> */
}

// <button onClick={handleGoogleLogin} className='btn btn-neutral'>google login</button>
