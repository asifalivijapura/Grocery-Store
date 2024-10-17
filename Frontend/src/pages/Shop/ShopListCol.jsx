import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productimg1 from "../../images/product-img-1.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../../reducer/action";


const ShopListCol = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productDetails({ id: _id }))
  }, [productDetails])

  const Data = useSelector(state => state.home.prodDetails.detail)
  console.log("Data", Data?.products)

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1000);
  }, []);

  function Dropdown() {
    return (

      <>
        <div>
          <div className="container">
            <div className=" fixed-side">

              <div className="">
                <div>
                  {loaderStatus ? (
                    <div className="loader-container">
                      <MagnifyingGlass
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="magnifying-glass-loading"
                        wrapperStyle={{}}
                        wrapperclassName="magnifying-glass-wrapper"
                        glassColor="#c0efff"
                        color="#0aad0a"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="my-5">
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            {/* card body */}
                            <div className="card-body">
                              <div className="row align-items-center">
                                {/* Product Image */}
                                <div className="col-md-4 col-12">
                                  <div className="text-center position-relative">
                                    <Link to="#!">
                                      <img
                                        src={Data?.products?.imageUrl}
                                        className="mb-3 img-fluid"
                                        style={{ height: '335px', width: '335px' }}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                {/* Product Details */}
                                <div className="col-md-8 col-12 flex-grow-1">
                                  {/* Category */}
                                  <div className="text-small mb-1">
                                    <Link to="#!" className="text-decoration-none text-muted">
                                      <small>{Data?.products?.category}</small>
                                    </Link>
                                  </div>
                                  {/* Product Name */}
                                  <h2 className="fs-6">
                                    <Link
                                      to="#!"
                                      className="text-inherit text-decoration-none"
                                    >
                                      {Data?.products?.name}
                                    </Link>
                                  </h2>
                                  {/* Price */}
                                  <div className="mt-2">
                                    <div>
                                      <span className="text-dark">
                                        {Data?.products?.discountprice &&
                                          '$'
                                        }
                                        {
                                          Data?.products?.discountprice &&
                                            Data?.products?.discountprice ? Data?.products?.price - Data?.products?.discountprice : null
                                        }</span>{" "}
                                      <span className={
                                        Data?.products?.discountprice &&
                                          Data?.products?.discountprice ?
                                          "text-decoration-line-through text-muted"
                                          : null
                                      }>
                                        ${Data?.products?.price}
                                      </span>
                                    </div>
                                  </div>
                                  {/* Description */}
                                  <div className="mt-3">
                                    <p className="text-muted">
                                      {Data?.products?.description}
                                    </p>
                                  </div>
                                  {/* Buttons */}
                                  <div className="mt-4">
                                    <Link
                                      to={'/ShopCart'}
                                      className="btn btn-primary me-2"
                                    >
                                      <FaCartPlus className="addToCart" />
                                      Add to Cart
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //       </div>
  //     );
  //   }

  return <Dropdown />;
};

export default ShopListCol;
