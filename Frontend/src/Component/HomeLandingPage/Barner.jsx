import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import adbanner1 from '../../images/ad-banner-1.jpg'
import adbanner2 from '../../images/ad-banner-2.jpg'
import adbanner3 from '../../images/ad-banner-3.jpg'
import { Link } from 'react-router-dom'

const Barner = () => {
    return (
        <>
            <section className="mt-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 fade-in-left">
                            <Slide direction="left">
                                <div className=" banner mb-3">
                                    {/* Banner Content */}
                                    <div className="position-relative">
                                        {/* Banner Image */}
                                        <img
                                            src={adbanner1}
                                            alt="ad-banner"
                                            className="img-fluid rounded-3 w-100"
                                        />
                                        <div className="banner-text">
                                            <h3 className="mb-0 fw-bold">
                                                10% cashback on <br />
                                                personal care{" "}
                                            </h3>
                                            <div className="mt-4 mb-5 fs-5">
                                                <p className="mb-0">Max cashback: ₹999</p>
                                                <span>
                                                    Code:{" "}
                                                    <span className="fw-bold text-dark">
                                                        CARE12
                                                    </span>
                                                </span>
                                            </div>
                                            <Link to="#" className="btn btn-dark">
                                                Shop Now
                                            </Link>
                                        </div>
                                        {/* Banner Content */}
                                    </div>
                                </div>
                            </Slide>
                        </div>

                        <div className="col-lg-4 col-md-6  col-12 slide-in-top">
                            <Zoom>
                                <div className="banner mb-3 ">
                                    {/* Banner Content */}
                                    <div className="position-relative">
                                        {/* Banner Image */}
                                        <img
                                            src={adbanner2}
                                            alt="ad-banner-2"
                                            className="img-fluid rounded-3 w-100"
                                        />
                                        <div className="banner-text">
                                            {/* Banner Content */}
                                            <h3 className=" fw-bold mb-2">
                                                Say yes to <br />
                                                season’s fresh{" "}
                                            </h3>
                                            <p className="fs-5">
                                                Refresh your day <br />
                                                the fruity way
                                            </p>
                                            <Link to="#" className="btn btn-dark mt-2">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <div className="col-lg-4 col-12 fade-in-left ">
                            <Slide direction="right">
                                <div className="banner mb-3">
                                    <div className="banner-img">
                                        {/* Banner Image */}
                                        <img
                                            src={adbanner3}
                                            alt="ad-banner-3"
                                            className="img-fluid rounded-3 w-100"
                                        />
                                        {/* Banner Content */}
                                        <div className="banner-text">
                                            <h3 className="fs-2 fw-bold lh-1 mb-2">
                                                When in doubt,
                                                <br />
                                                eat ice cream{" "}
                                            </h3>
                                            <p className="fs-5">
                                                Enjoy a scoop of
                                                <br />
                                                summer today
                                            </p>
                                            <Link to="#" className="btn btn-dark">
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

export default Barner
