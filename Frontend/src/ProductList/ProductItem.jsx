import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkLocalStorageData } from "../localReducer/reducer";
import { addToCart } from "../addtocart/action";

const ProductItem = ({ Data }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const localData = useSelector((state) => state?.local?.dataAvailable)
  // console.log("localData", localData)

  useEffect(() => {
    dispatch(checkLocalStorageData())
  }, [checkLocalStorageData])

  const toCart = (data) => {
    const productId = data?._id
    const userId = localStorage.getItem('userId')
    const quentity = 1
    const Data = {
      userId,
      productId,
      quentity
    }
    dispatch(addToCart(Data))
  }

  const toLoggin = () => {
    navigate('MyAccountSignIn')
  }

  return (
    <div>
      {/* Popular Products Start*/}
      <section className="my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8" >
                <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
                <div className="wt-separator bg-primarys">
                </div>
                <div className="wt-separator2 bg-primarys">
                </div>
                {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
              </div>
            </div>
          </div>
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {Data?.products &&
              Data?.products.slice(0, 10).map((elem, idx) => {
                // console.log("elem", elem)
                return (
                  <div className="col fade-zoom" key={idx}>
                    <div className="card card-product">
                      <div className="card-body">
                        <div className="text-center position-relative ">

                          <Link to={`/ProductDetail/${elem?._id}`}>
                            {" "}
                            <img
                              src={elem?.imageUrl}
                              className="mb-3 img-fluid"
                              style={{ height: '130px', width: '176px' }}
                            />
                          </Link>
                        </div>
                        <div className="text-small mb-1">
                          <Link to={`/ProductDetail/${elem?._id}`}
                            className="text-decoration-none text-muted"
                          >
                            <small>{elem?.category}</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            to={`/ProductDetail/${elem?._id}`}
                            className="text-inherit text-decoration-none"
                          >
                            {elem?.name}
                          </Link>
                        </h2>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">
                              {elem?.discountprice &&
                                '₹'
                              }
                              {
                                elem?.discountprice &&
                                  elem?.discountprice ? elem?.price - elem?.discountprice : null
                              }</span>{" "}
                            <span className={
                              elem?.discountprice &&
                                elem?.discountprice ?
                                "text-decoration-line-through text-muted"
                                : null
                            }>
                              ₹{elem?.price}
                            </span>
                          </div>
                          <div>
                            <button onClick={localData && localData ? () => toCart(elem) : toLoggin} className="btn btn-primary btn-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                              </svg>{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="text-center mt-6">
            <Link to={'/Product'}>
              <button type="button" class="btn btn-success">View All Products</button>
            </Link>
          </div>
        </div>
      </section >
      {/* Popular Products End*/}
    </div >
  );
};

export default ProductItem;
