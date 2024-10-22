import React, { useEffect, useState } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { checkLocalStorageData } from "../localReducer/reducer";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [loggedin, setLoggedin] = useState(false)
  const [userName, setUserName] = useState()

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  const handleLogOutUser = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    setUserName()
    setLoggedin(false)

    dispatch(checkLocalStorageData());

    navigate('/')
    // window.location.reload();
  }

  useEffect(() => {
    setUserName(localStorage.getItem('username') ? localStorage.getItem('username') : false);
    setLoggedin(localStorage.getItem('userId') ? true : false)
  }, [loggedin])

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
                >{userName &&
                  userName ?
                  `${userName}` :
                  'Account'
                  }
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div>
                    <div>
                      {loggedin &&
                        loggedin ?
                        <Link className="dropdown-item" to={'/'} onClick={handleLogOutUser}>
                          Log Out
                        </Link>
                        :
                        <Link className="dropdown-item" to={"/MyAccountSignIn"}>
                          Sign in
                        </Link>
                      }
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
