import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'
import assortment from "../../images/assortment-citrus-fruits.png";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
import product5 from "../../images/category-cleaning-essentials.jpg";
import product6 from "../../images/category-dairy-bread-eggs.jpg";
import product7 from "../../images/category-instant-food.jpg";
import product8 from "../../images/category-pet-care.jpg";
import product9 from "../../images/category-snack-munchies.jpg";
import product10 from "../../images/category-tea-coffee-drinks.jpg";
import ScrollToTop from "../ScrollToTop";

function Dropdown() {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

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
                    <h1 className="mb-0">Snacks &amp; Munchies</h1>
                  </div>
                </div>
                {/* list icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <div>

                  </div>
                  {/* icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low"> Price: High to Low</option>
                        <option value="Release Date"> Release Date</option>
                        <option value="Avg. Rating"> Avg. Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative ">
                          <div className=" position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <Link to="#!">
                            {/* img */}
                            <img
                              src={product1}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Snack &amp; Munchies</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Haldiram's Sev Bhujia
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$18</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className=" position-absolute top-0 start-0">
                            <span className="badge bg-success">14%</span>
                          </div>
                          <Link to="#!">
                            {/* img */}
                            <img
                              src={product2}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Bakery &amp; Biscuits</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            NutriChoice Digestive{" "}
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$24</span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product3}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Bakery &amp; Biscuits</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Cadbury 5 Star Chocolate
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $35
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className=" position-absolute top-0">
                            <span className="badge bg-danger">hot</span>
                          </div>
                          <Link to="#!">
                            {/* img */}
                            <img
                              src={product4}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Snack &amp; Munchies</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Onion Flavour Potato
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$3</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $5
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product5}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Instant Food</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Salted Instant Popcorn{" "}
                          </Link>
                        </h2>

                        <div className="d-flex justify-content-between mt-4">
                          <div>
                            <span className="text-dark">$13</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $18
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative ">
                          <div className=" position-absolute top-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <Link to="#!">
                            {/* img */}
                            <img
                              src={product6}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Dairy, Bread &amp; Eggs</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Blueberry Greek Yogurt
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$18</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product7}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Dairy, Bread &amp; Eggs</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Britannia Cheese Slices
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$24</span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product8}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Instant Food</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Kellogg's Original Cereals
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $35
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product9}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Snack &amp; Munchies</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Slurrp Millet Chocolate{" "}
                          </Link>
                        </h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$3</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $5
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <Link to="#!">
                            <img
                              src={product10}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>

                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Dairy, Bread &amp; Eggs</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Amul Butter - 500 g
                          </Link>
                        </h2>

                        <div className="d-flex justify-content-between mt-4">
                          <div>
                            <span className="text-dark">$13</span>{" "}
                            <span className="text-decoration-line-through text-muted">
                              $18
                            </span>
                          </div>
                          {/* btn */}
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
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
                            </Link>
                          </div>
                        </div>
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
  );
}



export default Dropdown;
