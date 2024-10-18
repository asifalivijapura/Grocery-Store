import React, { useEffect, useState } from "react";
import signinimage from '../../images/signin-g.svg'
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../reducer/action";
import { jwtDecode } from "jwt-decode"
// import Grocerylogo from '../../images/Grocerylogo.png'

const MyAccountSignIn = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const Data = useSelector(state => state.home.loginDetails.loginList)
  console.log("Data near Data", Data)
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
    dispatch(loginData(formData))
    if (Data && Data?.data?.error) {
      console.log("Data error ", Data?.data?.error)
      alert(Data?.data?.error)
      if (Data?.data?.status === 0) {
        navigate('/MyAccountSignUp')
      }
    } else if (Data && Data?.data?.token) {
      console.log("Data", Data?.data)
      alert('user Logged In Successfulll')
      if (Data?.data?.status === 1) {
        navigate('/')
      }
    }
  }

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
