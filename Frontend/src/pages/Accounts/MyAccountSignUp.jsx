import React, { useState } from "react";
import signupimage from '../../images/signup-g.svg';
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import axios from 'axios'; // Import axios for API requests
import { useDispatch } from "react-redux";
import { errorTostify, successTostify } from "../../toster/tostify";

const MyAccountSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Function to handle API call for registration
  const registerUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/registation`, data);
      // console.log("Response from API: ", response);
      return response;
    } catch (error) {
      console.log("Error: ", error.message);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      // console.log("response in component", response)
      if (response?.data?.status === 1) {
        const msg = 'User registered successfully'
        dispatch(successTostify(msg))
        navigate('/MyAccountSignIn');
      }
    } catch (error) {
      dispatch(errorTostify(error?.response?.data?.error))
    }
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img
                src={signupimage}
                alt="freshcart"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                <p>Welcome to FreshCart! Enter your email to get started.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      name="username"
                      value={formData?.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
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
    </div>
  );
};

export default MyAccountSignUp;
