import React, { useEffect, useState } from 'react'
import slider1 from '../../images/slide-1.jpg'
import slider2 from '../../images/slider-2.jpg';
import { Link } from 'react-router-dom'


const Hero = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);


    return (
        <>
            <div className="scroll-to-top">
                <button
                    onClick={scrollToTop}
                    className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
                >
                    ↑
                </button>
            </div>
            <section className="hero-section">
                <div className="container mt-8">
                    <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div
                                    style={{
                                        background: `url(${slider1}) no-repeat`,
                                        backgroundSize: "cover",
                                        borderRadius: ".5rem",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                                        <span className="badge text-bg-warning">
                                            Opening Sale Discount 50%
                                        </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            SuperMarket Daily <br /> Fresh Grocery
                                        </h2>
                                        <p className="lead">
                                            Introduced a new model for online grocery shopping
                                            and convenient home delivery.
                                        </p>
                                        <Link to="#!" className="btn btn-dark mt-3">
                                            Shop Now{" "}
                                            <i className="feather-icon icon-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div
                                    style={{
                                        background: `url(${slider2}) no-repeat`,
                                        backgroundSize: "cover",
                                        borderRadius: ".5rem",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                                        <span className="badge text-bg-warning">
                                            Free Shipping - orders over ₹499
                                        </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            Free Shipping on <br /> orders over{" "}
                                            <span className="text-primary">₹499</span>
                                        </h2>
                                        <p className="lead">
                                            Free Shipping to First-Time Customers Only, After
                                            promotions and discounts are applied.
                                        </p>
                                        <Link to="#!" className="btn btn-dark mt-3">
                                            Shop Now{" "}
                                            <i className="feather-icon icon-arrow-right ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            className="carousel-control-prev"
                            to="#carouselExampleFade"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                        </Link>
                        <Link
                            className="carousel-control-next"
                            to="#carouselExampleFade"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
