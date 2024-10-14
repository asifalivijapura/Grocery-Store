import React from 'react'
import { Slide } from 'react-awesome-reveal'
import grocerybanner from '../../images/grocery-banner.png'
import { Link } from 'react-router-dom'
import grocerybanner2 from '../../images/grocery-banner-2.jpg'

const BarnerSlide = () => {
    return (
        <>
            <section>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0  fade-in-left">
                            <Slide direction="left">
                                <div>
                                    <div
                                        className="py-10 px-8 rounded-3"
                                        style={{
                                            background: `url(${grocerybanner}) no-repeat`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div>
                                            <h3 className="fw-bold mb-1">
                                                Fruits &amp; Vegetables
                                            </h3>
                                            <p className="mb-4">
                                                Get Upto <span className="fw-bold">30%</span>{" "}
                                                Off
                                            </p>
                                            <Link to="#!" className="btn btn-dark">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-lg-6 fade-in-left ">
                            <Slide direction="right">
                                <div>
                                    <div
                                        className="py-10 px-8 rounded-3"
                                        style={{
                                            background: `url(${grocerybanner2}) no-repeat`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div>
                                            <h3 className="fw-bold mb-1">
                                                Freshly Baked Buns
                                            </h3>
                                            <p className="mb-4">
                                                Get Upto <span className="fw-bold">25%</span>{" "}
                                                Off
                                            </p>
                                            <Link to="#!" className="btn btn-dark">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BarnerSlide
