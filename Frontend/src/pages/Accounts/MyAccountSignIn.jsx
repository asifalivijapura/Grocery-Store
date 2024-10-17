import React, { useState } from "react";
import signinimage from '../../images/signin-g.svg'
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
// import Grocerylogo from '../../images/Grocerylogo.png'

const MyAccountSignIn = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  // console.log("formData in login", formData)

  return (
    <div>
      <>
        <div>
          <>
            <ScrollToTop />
          </>
          <section className="my-lg-14 my-8">
            <div className="container">
              {/* row */}
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                  {/* img */}
                  <img
                    src={signinimage}
                    alt="freshcart"
                    className="img-fluid"
                  />
                </div>
                {/* col */}
                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                  <div className="mb-lg-9 mb-5">
                    <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                    <p>
                      Welcome back to FreshCart! Enter your email to get
                      started.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* row */}
                      <div className="col-12">
                        {/* input */}
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                          value={formData?.email}
                          name="email"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        {/* input */}
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData?.password}
                          onChange={handleChange}
                          required

                        />
                      </div>
                      {/* btn */}
                      <div className="col-12 d-grid">
                        {" "}
                        <button className="btn btn-primary">
                          Sign In
                        </button>
                      </div>
                      {/* link */}
                      <div>
                        Don’t have an account?{" "}
                        <Link to="/MyAccountSignUp"> Sign Up</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default MyAccountSignIn;
