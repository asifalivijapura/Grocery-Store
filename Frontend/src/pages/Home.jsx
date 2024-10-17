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
import { useDispatch, useSelector } from "react-redux";
import { popularProduct } from "../reducer/action";
const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(popularProduct())
  }, [popularProduct])

  const Data = useSelector(state => state.home.popularProductData.data?.data)
  // console.log('Data', Data)
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
            {Data &&
              <>
                <Hero />
                <Barner />
                <ShopPopularCategories />
                <BarnerSlide />
                <ProductItem Data={Data} />
              </>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
