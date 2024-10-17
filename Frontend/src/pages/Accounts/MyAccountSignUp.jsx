import React, { useState } from "react";
import signupimage from '../../images/signup-g.svg'
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MyAccountSignUp = () => {

  const [formData, setFormData] = useState({
    userName: '',
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

  // console.log("formData in signUp", formData)

  return (
    <div>
      <>
        <ScrollToTop />
      </>
      <>
        {/* section */}
        <section className="my-lg-14 my-8">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                {/* img */}
                <img
                  src={signupimage}
                  alt="freshcart"
                  className="img-fluid"
                />
              </div>
              {/* col */}
              <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                <div className="mb-lg-9 mb-5">
                  <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                  <p>Welcome to FreshCart! Enter your email to get started.</p>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        name="userName"
                        value={formData?.userName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={formData?.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* btn */}
                    <div className="col-12 d-grid">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                      <span className="navbar-text">
                        Already have an account?
                        <Link to="/MyAccountSignIn" style={{ color: '#0aad0a' }}>Sign in</Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default MyAccountSignUp;
