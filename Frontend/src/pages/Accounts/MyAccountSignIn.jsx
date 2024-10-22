import React, { useState } from "react";
import signinimage from '../../images/signin-g.svg'
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { errorTostify, successTostify } from "../../toster/tostify";


const MyAccountSignIn = ({ setShowHeader }) => {

  setShowHeader(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const mesaage = "Login Successfull"


  const loginData = async (data) => {
    // console.log("Data in action login: ", data);

    try {
      const response = await axios.post(`http://localhost:8080/login`, data).then(response => {
        console.log("respponse", response);
        if (response?.data?.status === 1) {
          dispatch(successTostify(mesaage))
          // console.log("Login success: ", response?.data);
          localStorage.setItem('userData', response?.data?.token)
          const decodedToken = jwtDecode(response?.data?.token);
          // console.log("decoded Token", decodedToken)
          localStorage.setItem('userId', decodedToken?.userId)
          localStorage.setItem('username', decodedToken?.username)

          navigate('/');
          setShowHeader(true)
        }
      })
      // console.log("responece", response)
      return response;
    }
    catch (error) {
      // console.log("error", error)
      dispatch(errorTostify(error?.response?.data?.error))
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
    loginData(formData);
  };


  return (
    <div>

      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img
                src={signinimage}
                alt="freshcart"
                className="img-fluid"
              />
            </div>
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
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 d-grid">
                    <button className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
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
  );
};

export default MyAccountSignIn;
