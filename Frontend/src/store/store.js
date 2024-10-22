import { configureStore } from "@reduxjs/toolkit";
import homeDashboard from '../reducer/reducer'
import adminDashboard from '../adminReducer/reducer'
import localCheckData from '../localReducer/reducer'
import reactTostyfy from '../toster/tostify'
import userAddToCart from '../addtocart/reducer'


export const store = configureStore({
    reducer: {
        home: homeDashboard,
        admin: adminDashboard,
        local: localCheckData,
        toster: reactTostyfy,
        addToCart: userAddToCart
    }
})