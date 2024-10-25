import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "../ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { popularProduct } from "../../reducer/action";
import { addToCart } from "../../addtocart/action";
import { checkLocalStorageData } from "../../localReducer/reducer";

function Dropdown() {
  // addToCart

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
    const quantity = 1
    const Data = {
      userId,
      productId,
      quantity
    }
    dispatch(addToCart(Data))
  }

  const toLoggin = () => {
    navigate('/MyAccountSignIn')
  }

  // category

  const options = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Grains', 'Beverages', 'Snacks']

  const [selectedProduct, setSelectedProduct] = useState('All Category')
  const [sortOrder, setSortOrder] = useState('default')

  useEffect(() => {
    dispatch(popularProduct())
  }, [popularProduct])

  const Data = useSelector(state => state.home.popularProductData.data?.data)
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const filteredData = selectedProduct === 'All Category' ? Data?.products : Data?.products?.filter(product => product?.category === selectedProduct)

  const sortedData = filteredData ? [...filteredData].sort((a, b) => {
    // console.log("filtered a :", a)
    // console.log("filtered b :", b)
    if (sortOrder === 'Low to High') {
      // console.log("a", a)
      // console.log("b", b)
      return a.price - b.price
    } else if (sortOrder === 'High to Low') {
      return b.price - a.price
    } else {
      return 0;
    }
  }) : []

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
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
          <>
            <ScrollToTop />
          </>
          <div className="container ">

            <div className="row mb-3 mt-8">
              {/* Vertical Dropdowns Column */}
              {/* <h5 className="mb-3 mt-8"></h5> */}
              {/* Cards Column */}
              <div className="col-lg-12 col-md-12">
                {/* card */}
                <div className="card mb-4 bg-light border-0">
                  {/* card body */}
                  <div className=" card-body p-9">
                    <h1 className="mb-0">
                      {
                        selectedProduct &&
                          selectedProduct ? selectedProduct : 'All Category'
                      }
                    </h1>
                  </div>
                </div>
                {/* list icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <ul className="mb-0">
                    <li className="nav-item">
                      <li className="nav-item dmenu dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={() => { setSelectedProduct('All Category') }}
                        >
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-grid"
                            >
                              <rect x="3" y="3" width="7" height="7"></rect>
                              <rect x="14" y="3" width="7" height="7"></rect>
                              <rect x="14" y="14" width="7" height="7"></rect>
                              <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                          </span>{" "}
                          All Category
                        </Link>
                        < div

                          className="dropdown-menu sm-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          {options &&
                            options.map((element, index) => {
                              // console.log("element", element)
                              return (
                                <Link key={index} className="dropdown-item" onClick={() => setSelectedProduct(element)}>
                                  {element}
                                </Link>
                              )
                            })
                          }
                        </div>

                      </li>
                    </li>
                  </ul>

                  {/* icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                      >
                        <option value="default">Sort by : default</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low"> Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                  {/* col */}
                  {sortedData &&
                    sortedData.map((elem, ind) => {
                      return (
                        <div className="col" key={ind}>
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              {/* badge */}
                              <div className="text-center position-relative ">
                                <Link to={`/ProductDetail/${elem?._id}`}>
                                  {/* img */}
                                  <img
                                    src={elem?.imageUrl}
                                    className="mb-3 img-fluid"
                                    style={{ height: '130px', width: '176px' }}
                                  />
                                </Link>
                              </div>
                              {/* heading */}
                              <div className="text-small mb-1">
                                <Link to={`/ProductDetail/${elem?._id}`}
                                  className="text-decoration-none text-muted"
                                >
                                  <small>{elem?.category}</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link to={`/ProductDetail/${elem?._id}`}
                                  className="text-inherit text-decoration-none"
                                >
                                  {elem?.name}
                                </Link>
                              </h2>

                              {/* price */}
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
                                {/* btn */}
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
              </div>
            </div>
          </div>
        </>
      )
      }
    </div >
  );
}



export default Dropdown;
