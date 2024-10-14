import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import dairybreadeggs from '../../images/dairy-bread-eggs.png'
import fruitsvegetables from '../../images/fruits-vegetables.png'
import snackmunchies from '../../images/snack-munchies.png'
import bakerybiscuits from '../../images/bakery-biscuits.png'
import instantfood from '../../images/instant-food.png'
import teacoffeedrinks from '../../images/tea-coffee-drinks.png'
import colddrinksjuices from '../../images/cold-drinks-juices.png'
import chickenmeatfish from '../../images/chicken-meat-fish.png'
import babycare from '../../images/baby-care.png'
import cleaningessentials from '../../images/cleaning-essentials.png'
import petcare from '../../images/pet-care.png'
import attaricedal from '../../images/atta-rice-dal.png'

const ShopPopularCategories = () => {
    return (
        <>
            <section className="my-8">
                <div className="container ">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-6">
                                {/* heading    */}
                                <div className="section-head text-center mt-8">
                                    <h3
                                        className="h3style"
                                        data-title="Shop Popular Categories"
                                    >
                                        Shop Popular Categories
                                    </h3>
                                    <div className="wt-separator bg-primarys"></div>
                                    <div className="wt-separator2 bg-primarys"></div>
                                    {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={dairybreadeggs}
                                                alt="dairy-bread-eggs"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Dairy, Bread &amp; Eggs
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={fruitsvegetables}
                                                alt="fruits-vegetables"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        <div className="mt-4">
                                            {/* text */}
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Fruits &amp; Vegetables
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={snackmunchies}
                                                alt="snack-munchies"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Snack &amp; Munchies
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={bakerybiscuits}
                                                alt="bakery-biscuits"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Bakery &amp; Biscuits
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={instantfood}
                                                alt="instant-food"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Instant Food
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={teacoffeedrinks}
                                                alt="tea-coffee-drinks"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                <Link to="#" className="text-inherit">
                                                    Tea, Coffee &amp; Drinks
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={colddrinksjuices}
                                                alt="cold-drinks-juices"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                <Link to="#" className="text-inherit">
                                                    Cold Drinks &amp; Juices
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={chickenmeatfish}
                                                alt="chicken-meat-fish"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                <Link to="#" className="text-inherit">
                                                    Chicken, Meat &amp; Fish
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                {/* text */}
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={babycare}
                                                alt="baby-care"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Baby Care
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={cleaningessentials}
                                                alt="cleaning-essentials"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* img */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Cleaning Essentials
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={petcare}
                                                alt="pet-care"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                {" "}
                                                <Link to="#" className="text-inherit">
                                                    Pet Care
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            {/* col */}
                            <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                                <Zoom>
                                    <div className="text-center mb-10">
                                        {/* img */}
                                        <Link to="#">
                                            <img
                                                src={attaricedal}
                                                alt="atta-rice-dal"
                                                className="card-image rounded-circle"
                                            />
                                        </Link>
                                        {/* text */}
                                        <div className="mt-4">
                                            <h5 className="fs-6 mb-0">
                                                <Link to="#" className="text-inherit">
                                                    Atta, Rice &amp; Dal
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopPopularCategories
