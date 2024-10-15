import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import groceryshop from "../images/Grocerylogo.png";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="footer">
          <div className="overlay" />
          <div className="container">
            <div className="text-center">
              <div className="mb-30">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        src={groceryshop}
                        style={{ width: 300, padding: 20, marginLeft: "-30px" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="mb-30">
                    We deliver more than your expectations and help you to grow<br />
                    your business exponentially by providing customized<br />
                    applications. So, don’t just think, get ready to convert<br />
                    your ideas into reality.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="footer-bar">
            <div className="container text-center">
              <div className="footer-copy">
                <div className="copyright">
                  Project created by
                  <Link
                    target="_blank"
                  >
                    AsifAli Vijapura
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
