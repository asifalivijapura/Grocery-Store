import React, { useState } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Grocerylogo}
              style={{ width: 200, marginBottom: 10, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className={`containerr ${isOpen ? 'change' : ''}`} onClick={handleClick}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="mobile_nav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
            <ul className="navbar-nav navbar-light">

              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div>
                    <div>
                      <Link className="dropdown-item" to="/MyAccountSignIn">
                        Sign in
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ShopCart">
                  <FaCartPlus className="addToCart" />
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav >
    </div >
  );
};

export default Header;
