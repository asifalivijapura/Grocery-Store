import abouticon from "../images/about-icons-1.svg";
import map from "../images/map.png";
import iphone from "../images/iphone-2.png";
import googleplay from "../images/googleplay-btn.svg";
import appstore from "../images/appstore-btn.svg";
import bannerdeal from "../images/banner-deal1.jpg";
import product11 from "../images/product-img-11.jpg";
import product12 from "../images/product-img-12.jpg";
import product13 from "../images/product-img-13.jpg";
import clock from "../images/clock.svg";
import gift from "../images/gift.svg";
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";
import product1 from "../images/category-baby-care.jpg";
import product2 from "../images/category-atta-rice-dal.jpg";
import product3 from "../images/category-bakery-biscuits.jpg";
import product4 from "../images/category-chicken-meat-fish.jpg";
import product5 from "../images/category-cleaning-essentials.jpg";
import product6 from "../images/category-dairy-bread-eggs.jpg";
import product7 from "../images/category-instant-food.jpg";
import product8 from "../images/category-pet-care.jpg";
import product9 from "../images/category-snack-munchies.jpg";
import product10 from "../images/category-tea-coffee-drinks.jpg";
import React, { useState } from "react";
import ProductItem from "../ProductList/ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
// import { PulseLoader } from 'react-spinners';
import { MagnifyingGlass } from "react-loader-spinner";
import Hero from "../Component/HomeLandingPage/Hero";
import Barner from "../Component/HomeLandingPage/Barner";
import ShopPopularCategories from "../Component/HomeLandingPage/ShopPopularCategories";
import BarnerSlide from "../Component/HomeLandingPage/BarnerSlide";
const Home = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
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
            <Hero />
            <Barner />
            <ShopPopularCategories />
            <BarnerSlide />
            <ProductItem />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
